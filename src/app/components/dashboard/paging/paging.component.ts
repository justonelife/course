import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit, OnChanges {
    @Input() count: number;
    @Output() newPage = new EventEmitter<number>();

    public pageNumber: number[] = [];
    public currentPage: number = 1;

    constructor() { }

    ngOnInit(): void {
        for (let i = 0; i < this.count; i++) {
            this.pageNumber.push(i + 1);
        }
    }

    ngOnChanges(changes: SimpleChanges): void { }

    switchPage = (val) => {
        if (this.currentPage !== parseInt(val.currentTarget.innerText)) {
            this.currentPage = parseInt(val.currentTarget.innerText);
            this.newPage.emit(this.currentPage);
        }
        console.log("current page: ", this.currentPage);
        console.log("index: ", this.pageNumber.indexOf(this.currentPage));

    };

    prev = () => {
        if (this.currentPage > 1) {
            this.currentPage = this.currentPage - 1;
            this.newPage.emit(this.currentPage);
        } else {
            return null;
        }
        console.log("current page: ", this.currentPage);
        console.log("index: ", this.pageNumber.indexOf(this.currentPage));

    };

    next = () => {
        if (this.currentPage < this.pageNumber.length) {
            this.currentPage = this.currentPage + 1;
            this.newPage.emit(this.currentPage);
        } else {
            return null;
        }
        console.log("current page: ", this.currentPage);
        console.log("index: ", this.pageNumber.indexOf(this.currentPage));

    };

    setCurrentPage = (value) => {
        if (value !== this.currentPage) {

            if (this.currentPage < this.pageNumber.length + 1 && this.currentPage > 0) {
                this.currentPage = value;
                this.newPage.emit(this.currentPage);
            } else return null;
            console.log("current page: ", this.currentPage);
            console.log("index: ", this.pageNumber.indexOf(this.currentPage));
        }
    }
}
