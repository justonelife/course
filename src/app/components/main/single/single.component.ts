import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { DataCategoryService } from 'src/app/services/data-category.service';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

    public post: Post | undefined;
    public childCate: Category[] | undefined;
    public category: Category[] | undefined;

    private url:string;
    

    constructor(
        private router: ActivatedRoute,
        private dataService: DataCategoryService
    ) { }

    ngOnInit(): void {

        this.router.params.pipe(
            tap((res) => {
                this.variableReset();
                this.url = res.categoryURL;
            }),
            switchMap(() => this.dataService.getSingleCategoryByURL(this.url))
        ).subscribe(cate => {
            this.getPost(cate._id);
            this.getChildCate(cate);
        });

    }

    getPost(categoryId: string) {
        this.dataService.getCategoryDetail(categoryId).subscribe(res => {
            if (res === 'No Post') {
                this.post = {
                    title: '',
                    categoryId: '',
                    _id: '',
                    url: '',
                    prevId: '',
                    thumbnail: '',
                    content: res
                }
            } else this.post = res;
        });
    }

    getChildCate(parent: Category) {
        this.dataService.getCategoryByParent(parent._id).subscribe(res => {
            this.childCate = res;
            if (res.length > 0) this.category = this.childCate;
            else {
                let temp:Category[] = [];
                temp.push(parent);
                this.category = temp;
            }
        });
    }

    variableReset() {
        this.post = undefined;
        this.childCate = undefined;
        this.category = undefined;
    }

}
