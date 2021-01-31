import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { DataPostService } from 'src/app/services/data-post.service';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit, OnDestroy {

    public post: Post | undefined;
    public sideBarTitle: string = 'danh sách bài học';
    public category: Category;

    private subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataPost: DataPostService,
        private dataCategory: DataCategoryService
    ) { }

    ngOnInit(): void {
        this.subscription = this.activatedRoute.params.subscribe(param => {
            this.post = undefined;
            this.getPost(param.name);
        });

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getPost(url:string) {
        let sub = this.dataPost.getSinglePostByUrl(url).subscribe(res => {
            this.post = res;
            sub.unsubscribe();
            this.getCategory(this.post.categoryId);
        });
    }

    getCategory(id:string) {
        let sub = this.dataCategory.getSingleCategory(id).subscribe(res => {
            this.category = res;
            sub.unsubscribe();
        });
    }

}
