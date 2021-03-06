import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataPostService } from 'src/app/services/data-post.service';
import { Chart } from 'chart.js';
import { View } from 'src/app/models/view.model';
import { CommonFunctionService } from 'src/app/services/common-function.service';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const BACKGROUND_COLOR = new Array(10).fill('#3498db');
const BORDER_COLOR = new Array(10).fill('#2b80d6');

@Component({
    selector: 'app-post-view-month',
    templateUrl: './post-view-month.component.html',
    styleUrls: ['./post-view-month.component.scss']
})
export class PostViewMonthComponent implements OnInit {

    @ViewChild('barCanvas') barCanvas: ElementRef;

    public faSyncAlt = faSyncAlt;

    public barChart: any;
    private view: View[];
    private postId: string[] = [];
    private analyzed: { [key: string]: number } = {};
    public updating: boolean = false;

    constructor(
        private dataPost: DataPostService,
        private commonFunction: CommonFunctionService
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
                this.barChartMethod();
            }
            subscription.unsubscribe();
        });
    }
    
    barChartMethod(): void {
        
        let data = {
            labels: this.getPostTitle(this.postId),
            datasets: [{
                label: 'View of post',
                data: this.getPostView(this.postId),
                backgroundColor: BACKGROUND_COLOR,
                borderColor: BORDER_COLOR,
                borderWidth: 1
            }]
        }

        if (!this.barChart) this.draw(data);
        else this.update(data);
    }

    draw(data: any): void {
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'horizontalBar',
            data: data
        });
    }

    update(data: any): void {
        this.barChart.data = data;
        this.barChart.update();
    }

    analyzeView(view: View[]): { [key: string]: number } {
        let result = {};
        view.forEach(v => {
            if (!result[v.postId]) result[v.postId] = 0;
            result[v.postId]++;
        });
        return result;
    }

    init(data: { [key: string]: number }): void {
        this.postId.splice(0, this.postId.length);
        for (const key in data) this.postId.push(key);
    }

    sort(): void {
        this.commonFunction.sortView(this.postId, this.analyzed, 0, this.postId.length);
        this.postId.shift();
        this.postId = this.postId.splice(0, 10);
    }

    getPostTitle(ids: string[]): string[] {
        let result: string[] = [];
        for (let i = 0; i < ids.length; i++) {
            let singleView: View = this.view.filter(val => val.postId === ids[i])[0];
            result.push(singleView.postTitle.substring(0, 20));
        }
        return result;
    }

    getPostView(ids: string[]): number[] {
        return ids.map(val => this.analyzed[val]);
    }

}
