import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PUBLIC_USER, USER_END_POINT } from './reference';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    private publicUser = PUBLIC_USER;

    private END_POINT = USER_END_POINT;
    private PUBLIC_AUTH: string = `Basic ${btoa(this.publicUser.username + ':' + this.publicUser.password)}`;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.PUBLIC_AUTH
        })
    }

    private loginUrl:string;

    constructor(private httpClient: HttpClient) { 
        this.loginUrl = this.END_POINT + 'login';
    }

    postLogin(info:any): Observable<any> {
        return this.httpClient
            .post(this.loginUrl, info, this.httpOptions)
            .pipe(
                map(data => {
                    let temp:any = data;
                    let _id:string = temp._id;
                    let username:string = temp.username;
                    let roleId:string = temp._kmd.roles[0].roleId;
                    let newData:User = {_id, username, roleId};
                    return newData;
                }),
                catchError(err => {
                    return of(err.error);
                })
            );
    }
}
