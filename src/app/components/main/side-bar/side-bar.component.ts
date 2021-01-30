import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { DataPostService } from 'src/app/services/data-post.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    @Input() title: string;
    @Input() target: string | null;

    public post: Post[];

    constructor(private dataPost: DataPostService) { }

    ngOnInit(): void {
        if (!this.target) this.dataPost.getNewPost().subscribe(res => this.post = res);
        else this.dataPost.getAllPostOfCategory(this.target).subscribe(res => this.post = res);
    }

}
