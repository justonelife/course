import { Router } from '@angular/router';
import { routes } from './../../../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts-decision',
  templateUrl: './posts-decision.component.html',
  styleUrls: ['./posts-decision.component.scss'],
})
export class PostsDecisionComponent implements OnInit {
  faEdit = faEdit;
  faPlus = faPlus;

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
