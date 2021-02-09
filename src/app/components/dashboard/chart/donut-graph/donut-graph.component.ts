import { Component, ViewChild, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { forkJoin } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { DataPostService } from 'src/app/services/data-post.service';

const BACKGROUND_COLOR = ['#00cec9', '#6c5ce7', '#0984e3', '#d63031', '#e17055', '#fdcb6e', '#e84393', '#00b894', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c', '#c7ecee', '#22a6b3', '#be2edd', '#4834d4', '#130f40'];
const HOVER_BACKGROUND_COLOR = ['#81ecec', '#a29bfe', '#74b9ff', '#ff7675', '#fab1a0', '#ffeaa7', '#fd79a8', '#55efc4', '#f6e58d', '#ffbe76', '#ff7979', '#badc58', '#dff9fb', '#7ed6df', '#e056fd', '#686de0', '#30336b'];

@Component({
    selector: 'app-donut-graph',
    templateUrl: './donut-graph.component.html',
    styleUrls: ['./donut-graph.component.scss']
})
export class DonutGraphComponent implements OnInit, OnDestroy {

    @ViewChild('donutCanvas') donutCanvas: ElementRef;

    public donutChart: any;
    private subscription: any;
    public postPerCateogry: any[];
    public category: Category[];
    public currentCategory: Category[];
    public updating: boolean = true;

    constructor(
        private dataCategory: DataCategoryService,
        private dataPost: DataPostService
    ) { }

    ngOnInit(): void {
        this.subscription = this.dataCategory.getRawAllCategory().subscribe(res => {
            this.category = res;
            this.getCurrentCategory(res, null);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getCurrentCategory(data: Category[], reference: string | null): void {

        this.currentCategory = data.filter(d => d.parentId === reference);
        this.getCountPostPerCategory(this.currentCategory);
    }

    getCountPostPerCategory(data: Category[]): void {
        let leaf: any[] = [];
        data.forEach(d => leaf.push(this.findLeaf(d)))

        let obs: any[] = [];
        leaf.forEach(val => obs.push(this.dataPost.getCountPostByMultiCategoryId(val)));

        forkJoin(obs).subscribe(res => {
            this.updating = !this.updating;
            this.postPerCateogry = res;
            this.donutChartMethod();
        });
    }

    donutChartMethod() {
        let data = {
            labels: this.getName(this.currentCategory),
            datasets: [{
                label: '# of post',
                data: this.postPerCateogry,
                backgroundColor: BACKGROUND_COLOR,
                hoverBackgroundColor: HOVER_BACKGROUND_COLOR
            }]
        };
        if (!this.donutChart) this.draw(data);
        else this.update(data);
    }

    draw(data: any): void {
        this.donutChart = new Chart(this.donutCanvas.nativeElement, {
            type: 'doughnut',
            data: data,
            options: {
                onClick: this.getIn.bind(this)
            }
        });
    }

    update(data: any): void {
        this.donutChart.data = data;
        this.donutChart.update();
    }

    getIn(e: any) {
        let activePoint = this.donutChart.getElementsAtEvent(e);

        if (!this.updating && activePoint.length > 0) {
            let index = activePoint[0]._index;
            if (this.canGetIn(this.currentCategory[index]._id)) {
                this.updating = !this.updating;
                this.getCurrentCategory(this.category, this.currentCategory[index]._id);
            }
        }
    }

    getOut() {
        if (!this.updating) {
            this.updating = !this.updating;
            let reference = this.category.filter(d => d._id === this.currentCategory[0].parentId)[0];
            this.getCurrentCategory(this.category, reference.parentId);
        }
    }

    canGetIn(id: string): boolean {
        let temp = this.category.filter(c => c.parentId === id);
        if (temp.length > 0) return true;
        return false;
    }

    getName(data: Category[]): string[] {
        return data.map(d => d.name);
    }

    findLeaf(start: Category): string[] {
        let result: string[] = [];
        result.push(start._id);
        let i = 0;
        while (i < result.length) {
            let child = this.category.filter(c => c.parentId === result[i]).map(val => val._id);
            if (child.length > 0) {
                result.splice(i, 1, ...child);
                i--;
            }
            i++;
        }

        return result;
    }

    onBackClick() {
        if (this.currentCategory.length > 0 && this.currentCategory[0].parentId) this.getOut();
    }

}
