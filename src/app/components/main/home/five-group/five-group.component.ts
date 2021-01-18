import { Component, Input, OnInit } from '@angular/core';
import { DataPostService } from 'src/app/services/data-post.service';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/post.model';
import { DataCategoryService } from 'src/app/services/data-category.service';

@Component({
    selector: 'app-five-group',
    templateUrl: './five-group.component.html',
    styleUrls: ['./five-group.component.scss']
})
export class FiveGroupComponent implements OnInit {

    arrow = faLongArrowAltRight;

    @Input() categoryId: string;

    public topic:string = 'loading...';

    public posts: Post[] | undefined;
    public characterTitle: number = 60;
    public characterContent: number = 96;

    constructor(
        private dataSevice: DataPostService,
        private dataCategory: DataCategoryService
    ) { }

    ngOnInit(): void {
        this.dataCategory.getSingleCategory(this.categoryId).subscribe(res => this.topic = res.name);
        this.dataSevice.getLatestPost(this.categoryId).subscribe(res => this.posts = res);
    }

}
