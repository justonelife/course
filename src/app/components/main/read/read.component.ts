import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { View } from 'src/app/models/view.model';
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

    getPost(url:string): void {
        let sub = this.dataPost.getSinglePostByUrl(url).subscribe(res => {
            this.post = res;
            sub.unsubscribe();
            this.increaseView(this.post);
            this.getCategory(this.post.categoryId);
        });
    }

    getCategory(id:string): void {
        let sub = this.dataCategory.getSingleCategory(id).subscribe(res => {
            this.category = res;
            sub.unsubscribe();
        });
    }

    increaseView(post: Post): void {
        let ticket: View = { 
            postId: post._id,
            postTitle: post.title, 
            categoryId: post.categoryId
        };
        let sub = this.dataPost.postView(ticket).subscribe(res => {
            if (!res.error) console.log('add view');
            else console.log('add view error', res.error);
            sub.unsubscribe();
        });
    }

}
