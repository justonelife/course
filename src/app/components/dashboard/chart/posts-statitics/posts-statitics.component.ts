import { Chart } from 'chart.js';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-posts-statitics',
  templateUrl: './posts-statitics.component.html',
  styleUrls: ['./posts-statitics.component.scss'],
})
export class PostsStatiticsComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') postsPerYear;
  @ViewChild('barCanvas') postsPerMonth;
  @ViewChild('barCanvas') postsPerWeek;

  barChart: any;
  time: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.MonthChart();
    this.YearChart();
  }

  filterChart = (val) => {
    switch (val) {
      case 'Month':
        this.MonthChart();
        break;
      case 'Year':
        this.YearChart();
        break;
      default:
        this.MonthChart();
        break;
    }
  };

  MonthChart = () => {
    this.barChart = new Chart(this.postsPerMonth.nativeElement, {
      // type: 'horizontalBar',
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 50, 30, 15, 20, 34, 200, 50, 30, 15, 20, 34],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  YearChart = () => {
    this.barChart = new Chart(this.postsPerYear.nativeElement, {
      type: 'horizontalBar',
      // type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 50, 30, 15, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
}
