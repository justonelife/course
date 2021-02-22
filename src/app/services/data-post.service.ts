import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { 
    PUBLIC_USER, 
    COLLECTION_END_POINT, 
    POST_COLLECTION, 
    VIEW_COLLECTION,
    ROOT_USER 
} from './reference';
import { Post } from '../models/post.model';
import { catchError, map } from 'rxjs/operators';
import { headerOptions } from './authorization.service';
import { View } from '../models/view.model';

@Injectable({
    providedIn: 'root',
})
export class DataPostService {
    private END_POINT: string = COLLECTION_END_POINT;

    private PUBLIC_AUTH: string = `Basic ${btoa(
        PUBLIC_USER.username + ':' + PUBLIC_USER.password
    )}`;

    private ROOT_AUTH: string = `Basic ${btoa(ROOT_USER.username + ':' + ROOT_USER.password)}`;

    private latestPostUrl: string;
    private singlePostUrl: string;
    private allPostUrl: string;
    private newPostUrl: string;
    private viewUrl: string;

    constructor(private httpClient: HttpClient) {
        this.allPostUrl = this.END_POINT + POST_COLLECTION;
        this.latestPostUrl = this.END_POINT + POST_COLLECTION + `/?sort={"_kmd":1}&limit=5`;
        this.singlePostUrl = this.END_POINT + POST_COLLECTION + `/?limit=1`;
        this.newPostUrl = this.END_POINT + POST_COLLECTION + `/?sort={"_kmd":-1}&limit=10`;
        this.viewUrl = this.END_POINT + VIEW_COLLECTION;
    }

    getNewPost(): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(this.newPostUrl, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                map(data => this.transformData(data))
            )
    }

    getAllPostOfCategory(_id: string): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(this.allPostUrl + `/?query={"categoryId":"${_id}"}`, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                map(data => this.transformData(data))
            )
    }

    getLatestPost(_id: string): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(
                this.latestPostUrl + `&query={"categoryId":"${_id}"}`,
                headerOptions(this.PUBLIC_AUTH)
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
                headerOptions(this.PUBLIC_AUTH)
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
                headerOptions(this.PUBLIC_AUTH)
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
                headerOptions(this.PUBLIC_AUTH)
            )
            .pipe(
                map(data => this.transformData(data))
            );
    }

    getSinglePostByUrl(url: string): Observable<Post> {
        return this.httpClient
            .get<Post[]>(
                this.allPostUrl + `/?query={"url":"${url}"}`,
                headerOptions(this.PUBLIC_AUTH)
            )
            .pipe(
                map(data => new Post(data[0]))
            )
    }

    getSearchPost(title: string): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(
                this.allPostUrl + `/?query={"title":{"$regex":"^${title}"}}`, 
                headerOptions(this.PUBLIC_AUTH)
            )
            .pipe(
                map(data => this.transformData(data))
            )
    }

    formatFiveGroup(data: Post[]): Post[] {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(data[0].content, 'text/html');
        data[0].content = htmlDoc.body.innerText;
        return data;
    }

    transformData(data: Post[]): Post[] {
        let newData: Post[] = [];
        data.forEach(d => newData.push(new Post(d)));
        return newData;
    }

    transformView(view: View[]): View[] {
        let newData: View[] = [];
        view.forEach(v => newData.push(new View(v)));
        return newData;
    }

    postView(view: View): Observable<any> {
        return this.httpClient
            .post<View>(this.viewUrl, view, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                map(data => new View(data)),
                catchError(err => of(err))
            )
    }

    getViewOfMonth(_from: string, _to: string): Observable<any> {

        return this.httpClient
            .get<View[]>(
                this.viewUrl + `/?query={"$and":[
                    {"_kmd.ect": {"$gte":"${_from}"}},
                    {"_kmd.ect": {"$lte":"${_to}"}} 
                ]}`,
                headerOptions(this.ROOT_AUTH)
            )
            .pipe(
                map(data => this.transformView(data)),
                catchError(err => of(err))
            )
    }

}
