import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
    public cate: Category[] = [];
    faCaretDown = faCaretDown;

    private subscription;

    constructor(private data: DataCategoryService) { }

    ngOnInit(): void {
        this.subscription = this.data.getAllCategory().subscribe(res => this.cate = res);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
