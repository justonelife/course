import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { 
    PUBLIC_USER, 
    ROOT_USER, 
    USER_END_POINT, 
    APP_KEY, 
    APP_SECRET, 
    MASTER_KEY, 
    ROLE_END_POINT
} from './reference';
import { catchError, map } from 'rxjs/operators';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';
@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {

    private END_POINT = USER_END_POINT;

    //user credentials

    private PUBLIC_AUTH: string = `Basic ${btoa(
        PUBLIC_USER.username + ':' + PUBLIC_USER.password
    )}`;


    private loginUrl: string;
    private logoutUrl: string;


    //root credentials

    private ROOT_AUTH: string = `Basic ${btoa(ROOT_USER.username + ':' + ROOT_USER.password)}`;

    //master credentials

    private ROLE_END_POINT = ROLE_END_POINT;
    private MASTER_AUTH: string = `Basic ${btoa(APP_KEY + ':' + MASTER_KEY)}`;

    //app credentials

    private APP_AUTH: string = `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`;


    constructor(private httpClient: HttpClient) {
        this.loginUrl = this.END_POINT + 'login';
        this.logoutUrl = this.END_POINT + '_logout';
    }

    postLogin(info: any): Observable<any> {
        return this.httpClient
            .post(this.loginUrl, info, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                map(data => {
                    this.storeToken(data);
                    return new User(data);
                }),
                catchError(err => of(err.error))
            );
    }

    postLogout(): Observable<any> {
        return this.httpClient
            .post(this.logoutUrl, {}, headerOptions(this.PUBLIC_AUTH))
            .pipe(
                catchError(err => err)
            )
    }


    getAllRole(): Observable<Role[]> {
        return this.httpClient
            .get<Role[]>(this.ROLE_END_POINT, this.alterHeaderOptions(this.MASTER_AUTH))
            .pipe(
                map(data => {
                    let newData: Role[] = [];
                    data.forEach(val => newData.push(new Role(val)));
                    return newData;
                })
            )
    }

    postRegister(info): Observable<any> {
        return this.httpClient
            .post(this.END_POINT, info, this.alterHeaderOptions(this.APP_AUTH))
            .pipe(
                map(data => new User(data)),
                catchError(err => of(err.error))
            );
    }

    putAssignRole(userId: string, roleId: string): Observable<any> {
        return this.httpClient
            .put<any>(`${this.END_POINT}${userId}/roles/${roleId}`, {}, this.alterHeaderOptions(this.MASTER_AUTH))
            .pipe(
                map(data => {
                    if (data.error) return of(false);
                    return of(true);
                })
            )
    }

    putInfo(info: { [key: string]: string }, id: string): Observable<any> {
        return this.httpClient
            .put<any>(this.END_POINT + id, info, headerOptions(this.ROOT_AUTH))
            .pipe(
                map(data => new User(data)),
                catchError(err => of(err.error))
            )
    }

    alterHeaderOptions(auth: string) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': auth
            })
        }
    }

    storeToken(data: any) {
        let token = data._kmd.authtoken;
        sessionStorage.setItem('token', token);
    }


}

export function headerOptions(basicAuth: string) {
    let token = sessionStorage.getItem('token');
    let auth = token
        ? `Kinvey ${token}`
        : basicAuth;
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': auth
        })
    }
}
