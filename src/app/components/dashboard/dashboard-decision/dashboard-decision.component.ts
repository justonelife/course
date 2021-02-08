import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  faChartPie,
  faFileAlt,
  faLayerGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-decision',
  templateUrl: './dashboard-decision.component.html',
  styleUrls: ['./dashboard-decision.component.scss'],
})
export class DashboardDecisionComponent implements OnInit {
  faLayerGroup = faLayerGroup;
  faFileAlt = faFileAlt;
  faChartPie = faChartPie;
  faUser = faUser;

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
