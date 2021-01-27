import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagi',
  templateUrl: './pagi.component.html',
  styleUrls: ['./pagi.component.scss'],
})
export class PagiComponent implements OnInit {
  @Input() count: number;
  @Output() newPage = new EventEmitter<number>();

  public page: number[] = [];

  public currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.count; i++) this.page.push(i + 1);
  }

  switchPage(e) {
    if (this.currentPage !== parseInt(e.currentTarget.innerText)) {
      this.currentPage = parseInt(e.currentTarget.innerText);
      this.newPage.emit(this.currentPage);
    }
  }
}
