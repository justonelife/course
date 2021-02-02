import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
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
    public breadscrumb: {name: string, url: string}[] = [];
    private stepClick: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataCategory: DataCategoryService,
        private router: Router
    ) { }

    ngOnInit(): void {

        this.activatedRoute.params.pipe(
            tap((res) => {
                if (!this.stepClick) this.variableReset();
                this.current = res.categoryURL;
            }),
            switchMap(() => {
                if (this.stepClick) return of(null);
                return this.dataCategory.getRawAllCategory();
            })
        ).subscribe(res => {
            if (!this.stepClick) this.findBread(res);
            this.stepClick = false;
        })

    }

    findBread(cate: Category[]) {

        let startPoint = cate.filter(val => val.url === this.current);

        while (startPoint.length > 0) {

            this.breadscrumb.unshift({
                name: startPoint[0].name,
                url: startPoint[0].url
            });

            startPoint = cate.filter(val => val._id === startPoint[0].parentId);
        }

    }

    variableReset() {
        this.breadscrumb.splice(0, this.breadscrumb.length);
    }

    onStepClick(url:any, index:number) {
        let Len = this.breadscrumb.length;
        this.breadscrumb.splice(index + 1, Len - index - 1);
        this.stepClick = true;
        this.router.navigate(['/main/single', url]);
    }

}