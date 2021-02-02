import { Post } from './../models/post.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';
import { User } from './../models/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import {
  ROLE_ADMIN,
  USER_END_POINT,
  COLLECTION_END_POINT,
  ROOT_USER,
} from './reference';

// const USER_ROLE = 'c13d1ff1-8e1e-4c5b-82c1-408a5724c776';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Basic ${btoa(
      ROOT_USER.username + ':' + ROOT_USER.password
    )}`,
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersURL;
  private categoriesURL;
  private postsURL;
  private detailURL;

  roleChange: EventEmitter<string> = new EventEmitter<string>();
  navData: EventEmitter<Category[]> = new EventEmitter<Category[]>();

  constructor(private http: HttpClient) {
    this.usersURL = USER_END_POINT;
    this.categoriesURL = `${COLLECTION_END_POINT}category/`;
    this.postsURL = `${COLLECTION_END_POINT}post/`;
    this.detailURL = `${COLLECTION_END_POINT}categorydetail/`;
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
          if (user.roleId === ROLE_ADMIN) {
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
      .get<any>(`${this.usersURL}_count/`, httpOptions)
      .pipe(map((data) => data.count));
  }

  pagingUsers(limit: number, skip: number): Observable<User[]> {
    return this.http
      .get<any>(
        `${this.usersURL}?query={}&limit=${limit}&skip=${skip}`,
        httpOptions
      )
      .pipe(
        map((data) => {
          return data.map((item) => {
            const user = new User(item);
            if (user.roleId === ROLE_ADMIN) {
              user.roleId = 'admin';
            } else {
              user.roleId = 'user';
            }
            return user;
          });
        })
      );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesURL, httpOptions).pipe();
  }

  getAllCateName(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesURL, httpOptions).pipe(
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
      .get<any>(`${this.categoriesURL}_count/`, httpOptions)
      .pipe(map((data) => data.count));
  }

  pagingCategories(limit: number, skip: number): Observable<Category[]> {
    return this.http
      .get<any>(
        `${this.categoriesURL}?query={}&limit=${limit}&skip=${skip}`,
        httpOptions
      )
      .pipe(map((data) => data));
  }

  deleteUsers(user: User): Observable<User> {
    console.log(httpOptions);
    const url = `${this.usersURL}${user._id}?hard=true`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap((_) => console.log(`Deleted user with id = ${user._id}`)),
      catchError((error) => of(null))
    );
  }

  deleteCategories(category: Category): Observable<Category> {
    const url = `${this.categoriesURL}${category._id}`;
    return this.http.delete<Category>(url, httpOptions).pipe(
      tap((_) =>
        console.log(
          `Deleted category with id = ${JSON.stringify(category._id)}`
        )
      ),
      catchError((error) => of(null))
    );
  }

  updateCategories(category: Category): Observable<Category> {
    return this.http
      .put(`${this.categoriesURL}${category._id}`, category, httpOptions)
      .pipe(
        tap((updatedCategory) =>
          console.log(`Updated category = ${JSON.stringify(updatedCategory)}`)
        ),
        catchError((error) => of(null))
      );
  }

  addCategories(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.categoriesURL, category, httpOptions)
      .pipe(
        tap((addedCategory) => {
          console.log(`Added category = ${JSON.stringify(addedCategory)}`);
          catchError((error) => of(null));
        })
      );
  }

  createPosts(post: Post): Observable<Post> {
    post.title = post.title.toLocaleLowerCase();
    return this.http.post<Post>(this.postsURL, post, httpOptions).pipe(
      tap((newPost) => {
        console.log(`Created post = ${JSON.stringify(newPost)}`);
        catchError((error) => of(null));
      })
    );
  }

  createPostIntro(post: Post): Observable<Post> {
    return this.http.post<Post>(this.detailURL, post, httpOptions).pipe(
      tap((newPost) => {
        console.log(`Created post = ${JSON.stringify(newPost)}`);
        catchError((error) => of(null));
      })
    );
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsURL, httpOptions).pipe();
  }

  getIntroPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.detailURL, httpOptions).pipe();
  }

  getCountPosts(): Observable<number> {
    return this.http
      .get<any>(`${this.postsURL}_count/`, httpOptions)
      .pipe(map((data) => data.count));
  }

  pagingPosts(limit: number, skip: number): Observable<Post[]> {
    return this.http
      .get<any>(
        `${this.postsURL}?query={}&limit=${limit}&skip=${skip}`,
        httpOptions
      )
      .pipe(map((data) => data));
  }

  deletePosts(post: Post): Observable<Post> {
    const url = `${this.postsURL}${post._id}`;
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap((_) => console.log(`Deleted post with id = ${post._id}`)),
      catchError((error) => of(null))
    );
  }

  updatePosts(post: Post): Observable<Post> {
    return this.http.put(`${this.postsURL}${post._id}`, post, httpOptions).pipe(
      tap((updatedPost) =>
        console.log(`Updated post = ${JSON.stringify(updatedPost)}`)
      ),
      catchError((error) => of(null))
    );
  }
}
