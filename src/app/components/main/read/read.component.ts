import { Component, OnInit } from '@angular/core';
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
export class ReadComponent implements OnInit {

    public post: Post;
    public sideBarTitle: string = 'danh sách bài học';
    public category: Category;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataPost: DataPostService,
        private dataCategory: DataCategoryService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(param => {
            this.getPost(param.name);
        });

    }

    getPost(url:string) {
        this.dataPost.getSinglePostByUrl(url).subscribe(res => {
            this.post = res;
            this.getCategory(this.post.categoryId);
        });
    }

    getCategory(id:string) {
        this.dataCategory.getSingleCategory(id).subscribe(res => this.category = res);
    }

}
