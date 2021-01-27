import { PostsData } from './../models/post.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';
import { User } from './../models/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { CategoryData } from './../models/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { userInfo } from 'os';

const ADMIN_ROLE = 'ef60a4ae-6cf9-4d6f-bf47-269c2334afcb';
const USER_ROLE = 'c13d1ff1-8e1e-4c5b-82c1-408a5724c776';

const httpOptions = {
    headers: new HttpHeaders({
        Authorization: 'Basic cm9vdDpyb290',
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private kinveyURL;
    private appKey;
    private usersURL;
    private categoriesURL;
    private postsURL

    roleChange: EventEmitter<string> = new EventEmitter<string>();
    navData: EventEmitter<Category[]> = new EventEmitter<Category[]>();

    constructor(private http: HttpClient) {
        this.kinveyURL = 'https://baas.kinvey.com';
        this.appKey = 'kid_r1G6jhqRv';
        this.usersURL = `${this.kinveyURL}/user/${this.appKey}`;
        this.categoriesURL = `${this.kinveyURL}/appdata/${this.appKey}/categories`;
        this.postsURL = `${this.kinveyURL}/appdata/${this.appKey}/posts`;
    }

    emitRoleChange(role: string) {
        this.roleChange.emit(role);
    }

    getRoleChange() {
        return this.roleChange;
    }

    emitNavData(data: Category[]) {
        this.navData.emit(data);
    }

    getNavData() {
        return this.navData;
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersURL, httpOptions).pipe(
            map((data) => {
                return data.map((item) => {
                    const user = new User(item);
                    if (user.roleId === ADMIN_ROLE) {
                        user.roleId = 'admin';
                    } else {
                        user.roleId = 'user';
                    }
                    return user;
                });
            })
        );
    }

    getCountUsers(): Observable<number> {
        return this.http
            .get<any>(`${this.usersURL}/_count/`, httpOptions)
            .pipe(map((data) => data.count));
    }

    pagingUsers(limit: number, skip: number): Observable<User[]> {
        return this.http
            .get<any>(
                `${this.usersURL}/?query={}&limit=${limit}&skip=${skip}`,
                httpOptions
            )
            .pipe(
                map((data) => {
                    return data.map((item) => {
                        const user = new User(item);
                        if (user.roleId === ADMIN_ROLE) {
                            user.roleId = 'admin';
                        } else {
                            user.roleId = 'user';
                        }
                        return user;
                    });
                })
            );
    }

    getCategories(): Observable<CategoryData[]> {
        return this.http
            .get<CategoryData[]>(this.categoriesURL, httpOptions)
            .pipe();
    }

    getAllCateName(): Observable<CategoryData[]> {
        return this.http.get<CategoryData[]>(this.categoriesURL, httpOptions).pipe(
            map((res) => {
                let newData = [];
                for (let item of res) {
                    newData.push({
                        name: item.name,
                    });
                }
                return newData;
            })
        );
    }

    getCountCategories(): Observable<number> {
        return this.http
            .get<any>(`${this.categoriesURL}/_count/`, httpOptions)
            .pipe(map((data) => data.count));
    }

    pagingCategories(limit: number, skip: number): Observable<CategoryData[]> {
        return this.http
            .get<any>(
                `${this.categoriesURL}/?query={}&limit=${limit}&skip=${skip}`,
                httpOptions
            )
            .pipe(map((data) => data));
    }

    deleteUsers(user: User): Observable<User> {
        const url = `${this.usersURL}/${user._id}?hard=true`;
        return this.http.delete<User>(url, httpOptions).pipe(
            tap((_) => console.log(`Deleted user with id = ${user._id}`)),
            catchError((error) => of(null))
        );
    }

    deleteCategories(category: CategoryData): Observable<CategoryData> {
        const url = `${this.categoriesURL}/${category._id}`;
        return this.http.delete<CategoryData>(url, httpOptions).pipe(
            tap((_) =>
                console.log(
                    `Deleted category with id = ${JSON.stringify(category._id)}`
                )
            ),
            catchError((error) => of(null))
        );
    }

    updateCategories(category: CategoryData): Observable<CategoryData> {
        return this.http
            .put(`${this.categoriesURL}/${category._id}`, category, httpOptions)
            .pipe(
                tap((updatedCategory) =>
                    console.log(`Updated category = ${JSON.stringify(updatedCategory)}`)
                ),
                catchError((error) => of(null))
            );
    }

    addCategories(category: CategoryData): Observable<CategoryData> {
        return this.http
            .post<CategoryData>(this.categoriesURL, category, httpOptions)
            .pipe(
                tap((addedCategory) => {
                    console.log(`Added category = ${JSON.stringify(addedCategory)}`);
                    catchError((error) => of(null));
                })
            );
    }

    createPosts(post: PostsData): Observable<PostsData> {
        return this.http.post<PostsData>(this.postsURL, post, httpOptions).pipe(tap((newPost) => {
            console.log(`Created post = ${JSON.stringify(newPost)}`);
            catchError((error) => of(null));
        }))
    }

}
