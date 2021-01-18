import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { DataPostService } from 'src/app/services/data-post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() cate:Category[];

    private postPerPage:number = 15;
    public totalPage:number;
    private ids:string[];
    public post:Post[] | undefined;

    constructor(private dataService: DataPostService) { }

    ngOnInit(): void {
        this.ids = this.extractChildCateId(this.cate);

        this.dataService.getCountPostByMultiCategoryId(this.ids).subscribe(res => this.calcTotalPage(res));

        this.dataService.getPostChildCate(this.ids, 0, this.postPerPage).subscribe(res => this.post = res);
        
    }

    calcTotalPage(tp:number) {
        let totalPost:number = tp;
        this.totalPage = Math.ceil(totalPost / this.postPerPage);
    }

    changePage(e:number) {
        this.post = undefined;
        this.dataService
            .getPostChildCate(this.ids, (e - 1) * this.postPerPage, this.postPerPage)
            .subscribe(res => this.post = res);
    }

    extractChildCateId(cate:Category[]) {
        let ids:string[] = [];
        cate.forEach(val => {
            ids.push(val._id);
        });
        return ids;
    }

}
