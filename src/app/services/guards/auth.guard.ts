import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE_ADMIN } from '../reference';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let role = sessionStorage.getItem('role');
        if (role === ROLE_ADMIN) {
            return true;
        } else {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('email');
            this.router.navigate(['entrance/login/admin'])
            return false
        };
    }

}
