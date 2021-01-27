import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
    selector: 'app-big-group',
    templateUrl: './big-group.component.html',
    styleUrls: ['./big-group.component.scss']
})
export class BigGroupComponent implements OnInit {

    @Input() cate: Category[];

    public childCate:Category[] | undefined;

    constructor() { }

    ngOnInit(): void {
        // console.log(this.cate)
        this.childCate = this.cate;
    }

}
