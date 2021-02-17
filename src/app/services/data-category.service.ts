import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { COLLECTION_END_POINT, PUBLIC_USER } from './reference';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { headerOptions } from './authorization.service';

@Injectable({
    providedIn: 'root',
})
export class DataCategoryService {
    private END_POINT: string = COLLECTION_END_POINT;

    private PUBLIC_AUTH: string = `Basic ${btoa(
        PUBLIC_USER.username + ':' + PUBLIC_USER.password
    )}`;

    private categoryCollection = 'category';
    private detailCollection = 'categorydetail';

    private allCategoryURL: string;
    private detailURL: string;

    constructor(private httpClient: HttpClient) {
        this.allCategoryURL = this.END_POINT + this.categoryCollection;
        this.detailURL = this.END_POINT + this.detailCollection;
    }

    getAllCategory(): Observable<Category[]> {
        return this.httpClient
            .get<Category[]>(this.allCategoryURL, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                map((data) => {
                    let result: Category[] = [];
                    let bigCate = data.filter((cate) => !cate.parentId);
                    for (const cate of bigCate) {
                        let {_id, name, parentId, url, thumbnail } = cate;
                        let child = [];
                        result.push({ _id, name, parentId, url, thumbnail, child });
                    }

                    let notAttached = data.filter((cate) => cate.parentId);
                    let currentCate = [...result];

                    this.nestCategory(notAttached, currentCate);

                    return currentCate;
                })
            );
    }

    getCategoryDetail(_id: string): Observable<any> {
        return this.httpClient
            .get<Post[]>(
                this.detailURL + `/?query={"categoryId":"${_id}"}`,
                headerOptions(this.PUBLIC_AUTH)
            )
            .pipe(
                map((data) => {
                    if (data.length > 0) return new Post(data[0]);
                    else return 'No Post';
                })
            );
    }

    getRawAllCategory(): Observable<Category[]> {
        return this.httpClient
            .get<Category[]>(this.allCategoryURL, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                map((data) => {
                    let newData: Category[] = [];
                    data.forEach((val) => newData.push(new Category(val)));
                    return newData;
                })
            );
    }

    getSingleCategory(_id: string): Observable<Category> {
        return this.httpClient
            .get<Category>(this.allCategoryURL + `/${_id}`, headerOptions(this.PUBLIC_AUTH))
            .pipe(map((data) => new Category(data)));
    }

    getSingleCategoryByURL(url: string): Observable<Category> {
        return this.httpClient
            .get<Category[]>(
                this.allCategoryURL + `/?query={"url":"${url}"}`,
                headerOptions(this.PUBLIC_AUTH)
            )
            .pipe(map((data) => new Category(data[0])));
    }

    getCategoryByParent(parentId: string): Observable<Category[]> {
        return this.httpClient
            .get<Category[]>(
                this.allCategoryURL + `/?query={"parentId":"${parentId}"}`,
                headerOptions(this.PUBLIC_AUTH)
            )
            .pipe(
                map((data) => {
                    let newData: Category[] = [];
                    data.forEach((d) => newData.push(new Category(d)));
                    return newData;
                })
            );
    }

    nestCategory(notAttached: Category[], currentCate: Category[]): void {
        while (notAttached.length > 0) {
            let newCurrentCate: Category[] = [];
            for (let i = 0; i < currentCate.length; i++) {
                let cate = currentCate[i];
                let splicePositions = [];
                if (!cate.child) cate.child = [];
                for (let j = 0; j < notAttached.length; j++) {
                    let attach = notAttached[j];
                    if (cate._id === attach.parentId) {
                        cate.child.push(attach);
                        newCurrentCate.push(attach);
                        splicePositions.push(j);
                    }
                }
                splicePositions.sort((a, b) => b - a);
                splicePositions.forEach((val) => notAttached.splice(val, 1));
            }
            currentCate = [...newCurrentCate];
        }
    }
}
