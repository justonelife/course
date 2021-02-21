import {
  faBars,
  faCalendarAlt,
  faChartPie,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faEnvelope,
  faFileAlt,
  faLayerGroup,
  faQuestion,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faUserCircle = faUserCircle;
  faFileAlt = faFileAlt;
  faLayerGroup = faLayerGroup;
  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faEnvelope = faEnvelope;
  faQuestion = faQuestion;
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;
  faChevronCircleUp = faChevronCircleUp;
  faBars = faBars;
  faChartPie = faChartPie;

  public newMessages: number;
  public sidebarVisible: boolean = true;
  public username: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('admin');
    // console.log(this.username);
  }

  onToggleSidebar = () => {
    this.sidebarVisible = !this.sidebarVisible;
  };

  onBackHome = () => {
    this.router.navigate(['dashboard']);
  };

  onLogout = () => {
    sessionStorage.clear();
    this.router.navigate(['/entrance']);
  };
}
