import { Component, OnInit } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  faSearch = faSearch;
  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
