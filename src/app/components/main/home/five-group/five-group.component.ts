import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataPostService } from 'src/app/services/data-post.service';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/post.model';
import { DataCategoryService } from 'src/app/services/data-category.service';

@Component({
    selector: 'app-five-group',
    templateUrl: './five-group.component.html',
    styleUrls: ['./five-group.component.scss']
})
export class FiveGroupComponent implements OnInit, OnDestroy {

    arrow = faLongArrowAltRight;

    private subscription1;
    private subscription2;

    @Input() categoryId: string;

    public group:{[key:string]: string} = {
        name: 'loading...',
        url: ''
    };

    public posts: Post[] | undefined;
    public characterTitle: number = 60;
    public characterContent: number = 96;

    constructor(
        private dataSevice: DataPostService,
        private dataCategory: DataCategoryService
    ) { }

    ngOnInit(): void {
        this.subscription1 = this.dataCategory.getSingleCategory(this.categoryId).subscribe(res => this.group = {name: res.name, url: res.url});
        this.subscription2 = this.dataSevice.getLatestPost(this.categoryId).subscribe(res => this.posts = res);
    }

    ngOnDestroy(): void {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
    }

}
