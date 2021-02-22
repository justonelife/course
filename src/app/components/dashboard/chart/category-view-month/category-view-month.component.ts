import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataPostService } from 'src/app/services/data-post.service';
import { Chart } from 'chart.js';
import { View } from 'src/app/models/view.model';
import { CommonFunctionService } from 'src/app/services/common-function.service';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { forkJoin } from 'rxjs';
import { Category } from 'src/app/models/category.model';

const BACKGROUND_COLOR = new Array(10).fill('#3498db');
const BORDER_COLOR = new Array(10).fill('#2b80d6');

@Component({
    selector: 'app-category-view-month',
    templateUrl: './category-view-month.component.html',
    styleUrls: ['./category-view-month.component.scss']
})
export class CategoryViewMonthComponent implements OnInit {

    @ViewChild('barCanvas') barCanvas: ElementRef;

    public faSyncAlt = faSyncAlt;

    public barChart: any;
    private view: View[];
    private categoryId: string[] = [];
    private categoryName: string[] = [];
    private analyzed: { [key: string]: number } = {};
    public updating: boolean = false;

    constructor(
        private dataPost: DataPostService,
        private commonFunction: CommonFunctionService,
        private dataCategory: DataCategoryService
    ) { }

    ngOnInit(): void {
        this.process();
    }

    process(): void {
        this.updating = !this.updating;

        let currentTime = new Date();
        let { _from, _current: _to } = this.commonFunction.extractTime(currentTime);
        let subscription = this.dataPost.getViewOfMonth(_from, _to).subscribe(res => {
            if (!res.error) {
                this.updating = !this.updating;
                this.view = res;
                this.analyzed = this.analyzeView(this.view);
                this.init(this.analyzed);
                this.sort();
                this.draw();
            }
            subscription.unsubscribe();
        });
    }

    barChartMethod(): void {
        let data = {
            labels: this.categoryName,
            datasets: [{
                label: 'View of category',
                data: this.getCategoryView(this.categoryId),
                backgroundColor: BACKGROUND_COLOR,
                borderColor: BORDER_COLOR,
                borderWidth: 1
            }]
        }

        if (!this.barChart) this.drawChart(data);
        else this.updateChart(data);
    }
    
    drawChart(data: any): void {
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'horizontalBar',
            data: data
        });
    }

    updateChart(data: any): void {
        this.barChart.data = data;
        this.barChart.update();
    }

    analyzeView(view: View[]): { [key: string]: number } {
        let result = {};
        view.forEach(v => {
            if (!result[v.categoryId]) result[v.categoryId] = 0;
            result[v.categoryId]++;
        });
        return result;
    }

    init(data: { [key: string]: number }): void {
        this.categoryId.splice(0, this.categoryId.length);
        for (const key in data) this.categoryId.push(key);
    }

    sort(): void {
        this.commonFunction.sortView(this.categoryId, this.analyzed, 0, this.categoryId.length);
        this.categoryId.shift();
        this.categoryId = this.categoryId.splice(0, 10);
    }

    getCategoryName(ids: string[]): string[] {
        let result: string[] = [];
        for (let i = 0; i < ids.length; i++) {
            let singleView: View = this.view.filter(val => val.categoryId === ids[i])[0];
            result.push(singleView.categoryId);
        }
        return result;
    }

    getCategoryView(ids: string[]): number[] {
        return ids.map(val => this.analyzed[val]);
    }

    draw():void {
        let ids: string[] = this.getCategoryName(this.categoryId);
        let obs = [];
        ids.forEach(val => obs.push(this.dataCategory.getSingleCategory(val)));
        forkJoin(obs).subscribe((res: Category[]) => {
            this.categoryName = res.map(val => val.name);
            this.barChartMethod();
        });
    }

}
