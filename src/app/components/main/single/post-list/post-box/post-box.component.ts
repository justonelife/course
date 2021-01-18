import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
    selector: 'app-post-box',
    templateUrl: './post-box.component.html',
    styleUrls: ['./post-box.component.scss']
})
export class PostBoxComponent implements OnInit {

    @Input() public post: Post;


    constructor() { }

    ngOnInit(): void {
    }

}
