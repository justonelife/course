import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PUBLIC_USER, COLLECTION_END_POINT } from './reference';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataPostService {

    private publicUser = PUBLIC_USER;
    private END_POINT: string = COLLECTION_END_POINT;

    private AUTH: string = `Basic ${btoa(this.publicUser.username + ':' + this.publicUser.password)}`;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.AUTH
        })
    }

    private postCollection: string = 'post';
    private latestPostUrl: string;
    private singlePostUrl: string;
    private allPostUrl: string;

    constructor(private httpClient: HttpClient) {
        this.allPostUrl = this.END_POINT + this.postCollection;
        this.latestPostUrl = this.END_POINT + this.postCollection + `/?sort={"_kmd":1}&limit=5`;
        this.singlePostUrl = this.END_POINT + this.postCollection + `/?limit=1`;
    }

    getLatestPost(_id: string): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(this.latestPostUrl + `&query={"categoryId":"${_id}"}`, this.httpOptions)
            .pipe(
                map(data => {
                    let newData:Post[] = [];
                    for (let d of data) newData.push({
                        _id: d._id,
                        categoryId: d.categoryId,
                        content: d.content,
                        title: d.title
                    });
                    return newData;
                })
            );
    }

    getSinglePostByCategoryId(_id:string): Observable<any> {
        return this.httpClient
            .get<Post[]>(this.singlePostUrl + `&query={"categoryId":"${_id}"}`, this.httpOptions)
            .pipe(
                map(data => {
                    if (data.length > 0) {
                        let _id:string = data[0]._id;
                        let title:string = data[0].title;
                        let content:string = data[0].content;
                        let categoryId:string = data[0].categoryId;
                        let newData:Post = {_id, title, content, categoryId};
                        return newData;
                        
                    } else return 'No Post';
                })
            )
    }

    getCountPostByMultiCategoryId(ids:string[]):Observable<number> {
        let result:string = '';
        for (let id of ids) result += `{"categoryId":"${id}"}, `;

        result = result.slice(0, result.length - 2);

        return this.httpClient
            .get<any>(this.allPostUrl + `/_count/?query={"$or":[${result}]}`, this.httpOptions)
            .pipe(
                map(data => data.count)
            )
    }

    getPostChildCate(ids:string[], skip:number, limit:number):Observable<Post[]> {
        let result:string = '';
        for (let id of ids) result += `{"categoryId":"${id}"}, `;

        result = result.slice(0, result.length - 2);

        return this.httpClient
            .get<any>(this.allPostUrl + `/?query={"$or":[${result}]}&skip=${skip}&limit=${limit}`, this.httpOptions)
            .pipe(
                map(data => data)
            )
    }
}
