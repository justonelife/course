import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PUBLIC_USER, COLLECTION_END_POINT } from './reference';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataPostService {
    private publicUser = PUBLIC_USER;
    private END_POINT: string = COLLECTION_END_POINT;

    private AUTH: string = `Basic ${btoa(
        this.publicUser.username + ':' + this.publicUser.password
    )}`;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.AUTH,
        }),
    };

    private postCollection: string = 'post';
    private latestPostUrl: string;
    private singlePostUrl: string;
    private allPostUrl: string;
    private newPostUrl: string;

    constructor(private httpClient: HttpClient) {
        this.allPostUrl = this.END_POINT + this.postCollection;
        this.latestPostUrl = this.END_POINT + this.postCollection + `/?sort={"_kmd":1}&limit=5`;
        this.singlePostUrl = this.END_POINT + this.postCollection + `/?limit=1`;
        this.newPostUrl = this.END_POINT + this.postCollection + `/?sort={"_kmd":-1}&limit=10`;
    }

    getNewPost(): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(this.newPostUrl, this.httpOptions)
            .pipe(
                map(data => {
                    let newData: Post[] = [];
                    data.forEach(d => newData.push(new Post(d)));
                    return newData;
                })
            )
    }

    getAllPostOfCategory(_id:string): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(this.allPostUrl + `/?query={"categoryId":"${_id}"}`, this.httpOptions)
            .pipe(
                map(data => {
                    let newData: Post[] = [];
                    data.forEach(d => newData.push(new Post(d)));
                    return newData;
                })
            )
    }

    getLatestPost(_id: string): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(
                this.latestPostUrl + `&query={"categoryId":"${_id}"}`,
                this.httpOptions
            )
            .pipe(
                map(data => {
                    let newData: Post[] = [];
                    data.forEach(d => newData.push(new Post(d)));
                    return this.formatFiveGroup(newData);
                })
            );
    }

    getSinglePostByCategoryId(_id: string): Observable<any> {
        return this.httpClient
            .get<Post[]>(
                this.singlePostUrl + `&query={"categoryId":"${_id}"}`,
                this.httpOptions
            )
            .pipe(
                map((data) => {
                    if (data.length > 0) return new Post(data[0]);
                    else return 'No Post';
                })
            );
    }

    getCountPostByMultiCategoryId(ids: string[]): Observable<number> {
        let result: string = '';
        for (let id of ids) result += `{"categoryId":"${id}"}, `;

        result = result.slice(0, result.length - 2);

        return this.httpClient
            .get<any>(
                this.allPostUrl + `/_count/?query={"$or":[${result}]}`,
                this.httpOptions
            )
            .pipe(map((data) => data.count));
    }

    getPostChildCate({ ids, skip, limit }: { ids: string[]; skip: number; limit: number; }): Observable<Post[]> {
        let result: string = '';
        for (let id of ids) result += `{"categoryId":"${id}"}, `;

        result = result.slice(0, result.length - 2);

        return this.httpClient
            .get<Post[]>(
                this.allPostUrl +
                `/?query={"$or":[${result}]}&skip=${skip}&limit=${limit}`,
                this.httpOptions
            )
            .pipe(
                map(data => {
                    let newData: Post[] = [];
                    data.forEach(d => newData.push(new Post(d)));
                    return newData;
                })
            );
    }

    getSinglePostByUrl(url: string): Observable<Post> {
        return this.httpClient
            .get<Post[]>(
                this.allPostUrl + `/?query={"url":"${url}"}`,
                this.httpOptions
            )
            .pipe(
                map(data => new Post(data[0]))
            )
    }

    formatFiveGroup(data: Post[]): Post[] {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(data[0].content, 'text/html');
        data[0].content = htmlDoc.body.innerText;
        return data;
    }


}
