import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    public role:string = '';
    private subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.subscription = this.activatedRoute.url.subscribe(() => {
            let path = this.router.url.split('/').filter(val => val === 'admin' || val === 'user');
            if (path.length > 0) this.role = path[0];
            else this.role = ''; 
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
