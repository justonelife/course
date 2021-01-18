import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { DataPostService } from 'src/app/services/data-post.service';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

    public post: Post | undefined;
    public childCate: Category[] | undefined;

    constructor(
        private router: ActivatedRoute,
        private dataService: DataCategoryService,
        private dataPost: DataPostService
    ) { }

    ngOnInit(): void {
        this.router.params.subscribe(pres => {
            this.variableReset();

            let name: string = pres.category.split('-').join(' ');

            this.dataService.getSingleCategoryByName(name).subscribe(cate => {
                this.getPost(cate._id);
                this.getChildCate(cate._id);
            });
        });

    }

    getPost(categoryId: string) {
        this.dataPost.getSinglePostByCategoryId(categoryId).subscribe(res => {
            if (res === 'No Post') {
                this.post = {
                    title: '',
                    categoryId: '',
                    _id: '',
                    content: res
                }
            } else this.post = res;
        });
    }

    getChildCate(parentId: string) {
        this.dataService.getCategoryByParent(parentId).subscribe(res => {
            this.childCate = res;
        });
    }

    variableReset() {
        this.post = undefined;
        this.childCate = undefined;
    }

}
