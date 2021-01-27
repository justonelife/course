import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { DataCategoryService } from 'src/app/services/data-category.service';

@Component({
    selector: 'app-cate-breadscrumb',
    templateUrl: './cate-breadscrumb.component.html',
    styleUrls: ['./cate-breadscrumb.component.scss']
})
export class CateBreadscrumbComponent implements OnInit {

    private current: string;
    public breadscrumb: string[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataCategory: DataCategoryService
    ) { }

    ngOnInit(): void {

        this.activatedRoute.params.pipe(
            tap((res) => {
                this.variableReset();
                this.current = res.categoryURL; 
            }),
            switchMap(() => this.dataCategory.getRawAllCategory())
        ).subscribe(res => this.findBread(res))

    }

    findBread(cate: Category[]) {

        let startPoint = cate.filter(val => val.url === this.current);

        while (startPoint.length > 0) {

            this.breadscrumb.unshift(startPoint[0].name);

            startPoint = cate.filter(val => val._id === startPoint[0].parentId);
        }

    }

    variableReset() {
        this.breadscrumb.splice(0, this.breadscrumb.length);
    }

}