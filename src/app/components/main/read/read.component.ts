import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { DataPostService } from 'src/app/services/data-post.service';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

    public post: Post;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataPost: DataPostService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(param => {
            this.getPost(param.name);
        });
    }

    getPost(url:string) {
        this.dataPost.getSinglePostByUrl(url).subscribe(res => this.post = res);
    }

}
