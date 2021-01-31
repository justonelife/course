import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE_USER } from '../reference';

@Injectable({
    providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        let role = sessionStorage.getItem('role');
        if (role === ROLE_USER) return true;
        else {
            sessionStorage.clear();
            this.router.navigate(['entrance/login/user']);
            return false;
        }
    }

}
