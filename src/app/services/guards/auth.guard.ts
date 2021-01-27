import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (sessionStorage.getItem('admin')) {
            return true;
        } else {
            sessionStorage.removeItem('user')
            this.router.navigate(['entrance/login/admin'])
            return false
        };
    }

}
