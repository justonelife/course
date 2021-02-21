import { Component, OnInit, ViewChild, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { DataPostService } from 'src/app/services/data-post.service';
import { Chart } from 'chart.js';
import { View } from 'src/app/models/view.model';

const BACKGROUND_COLOR = new Array(10).fill('#3498db');
const BORDER_COLOR = new Array(10).fill('#2b80d6');

@Component({
    selector: 'app-post-view-month',
    templateUrl: './post-view-month.component.html',
    styleUrls: ['./post-view-month.component.scss']
})
export class PostViewMonthComponent implements OnInit, AfterViewInit {

    @ViewChild('barCanvas') barCanvas: ElementRef;

    public barChart: any;
    private postId: string[] = [];
    private analyzed: {[key:string]: number} = {};

    constructor(private dataPost: DataPostService) { }

    ngOnInit(): void {
        this.process();
    }

    ngAfterViewInit(): void {
        this.barChartMethod();
    }

    process(): void {
        let currentTime = new Date();
        let { _from, _current: _to } = this.dataPost.extractTime(currentTime);
        let subscription = this.dataPost.getViewOfMonth(_from, _to).subscribe(res => {
            if (!res.error) {
                this.analyzed = this.analyzeView(res);
                this.init(this.analyzed);
                this.sortView(this.postId, 0, this.postId.length);
            }
            subscription.unsubscribe();
        });
    }

    barChartMethod(): void {
        let data = {
            labels: ['monday', 'tuesday', 'wednesday', 'thirday', 'friday', 'saturday'],
            datasets: [{
                label: 'View of post',
                data: [200, 10, 50, 400, 80, 300],
                backgroundColor: BACKGROUND_COLOR,
                borderColor: BORDER_COLOR,
                borderWidth: 1
            }]
        }

        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: data
        });
    }

    analyzeView(view: View[]): {[key: string]: number} {
        let result = {};
        view.forEach(v => {
            if (!result[v.postId]) result[v.postId] = 0;
            result[v.postId]++;
        });
        return result;
    }

    init(data: {[key:string]: number}): void {
        this.postId.splice(0, this.postId.length);
        for (const key in data) this.postId.push(key);
    }

    // partition

    sortView(arr: string[], lo: number, hi: number) {
        if (lo < hi) {
            // let j = this.partition(arr, lo, hi);
        }
    }
}
