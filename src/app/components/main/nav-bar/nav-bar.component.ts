import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    public cate: Category[] = [];
    faCaretDown = faCaretDown;

    constructor(private data: DataCategoryService) { }

    ngOnInit(): void {
        this.data.getAllCategory().subscribe(res => this.cate = res);
    }

}
