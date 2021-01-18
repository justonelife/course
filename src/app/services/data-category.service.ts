import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { COLLECTION_END_POINT, PUBLIC_USER } from './reference';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataCategoryService {

    private publicUser = PUBLIC_USER;
    private END_POINT: string = COLLECTION_END_POINT;

    private AUTH: string = `Basic ${btoa(this.publicUser.username + ':' + this.publicUser.password)}`;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.AUTH
        })
    }

    private categoryCollection = 'category';

    private allCategoryURL: string;

    constructor(private httpClient: HttpClient) {
        this.allCategoryURL = this.END_POINT + this.categoryCollection;
    }

    getAllCategory(): Observable<Category[]> {
        return this.httpClient
            .get<Category[]>(this.allCategoryURL, this.httpOptions)
            .pipe(
                map(data => {
                    let result: Category[] = [];
                    let bigCate = data.filter(cate => !cate.parentId);
                    for (const cate of bigCate) {
                        result.push({
                            _id: cate._id,
                            name: cate.name,
                            parentId: cate.parentId,
                            child: []
                        });
                    }

                    let notAttached = data.filter(cate => cate.parentId);
                    let currentCate = [...result];

                    this.nestCategory(notAttached, currentCate);



                    return currentCate;
                })
            );
    }

    getSingleCategory(_id:string):Observable<Category> {
        return this.httpClient
            .get<Category>(this.allCategoryURL + `/${_id}`, this.httpOptions)
            .pipe(
                map(data => {
                    let {_id, name, parentId} = data;
                    let newData:Category = {_id, name, parentId};
                    return newData;
                })
            );
    }

    getSingleCategoryByName(name:string):Observable<Category> {
        return this.httpClient
            .get<Category[]>(this.allCategoryURL + `/?query={"name":"${name}"}`, this.httpOptions)
            .pipe(
                map(data => {
                    let _id:string = data[0]._id;
                    let name:string = data[0].name;
                    let parentId:string = data[0].parentId;
                    
                    let newData:Category = {_id, name, parentId};
                    return newData;
                })
            );
    }

    getCategoryByParent(parentId:string):Observable<Category[]> {
        return this.httpClient
            .get<Category[]>(this.allCategoryURL + `/?query={"parentId":"${parentId}"}`, this.httpOptions)
            .pipe(
                map(data => {
                    let newData:Category[] = [];
                    data.forEach(val => {
                        let _id:string = val._id;
                        let name:string = val.name;
                        let parentId:string = val.parentId;
                        newData.push({ _id, name, parentId });
                    })


                    return newData;
                })
            );
    }


    nestCategory(notAttached: Category[], currentCate: Category[]):void {
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
                splicePositions.forEach(val => notAttached.splice(val, 1));
            }
            currentCate = [...newCurrentCate];
        }
    }
}