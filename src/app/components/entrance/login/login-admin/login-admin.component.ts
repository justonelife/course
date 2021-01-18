import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

const ROLE = '19aa44d8-886e-43b7-b24e-b67d2df8c71c';


@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

    faArrowLeft = faArrowLeft;

    public username: string = '';
    public password: string = '';

    constructor(
        private router: Router,
        private loginService: AuthorizationService
    ) { }

    ngOnInit(): void { }

    onBackClick() {
        let currentUrl = this.router.url;
        let reverseUrl = currentUrl.split('').reverse().join('');
        let lastPlash = reverseUrl.indexOf('/');
        this.router.navigate([currentUrl.slice(0, currentUrl.length - lastPlash)]);
    }

    onLoginClick() {
        let info:any = {
            username: this.username,
            password: this.password
        }

        this.loginService.postLogin(info).subscribe(
            res => {
                if (!res.error) {
                    let roleId = res.roleId;
                    if (roleId === ROLE) this.router.navigate(['', 'dashboard']);
                    else window.alert('Login Admin Fail');
                } else {
                    window.alert('Login Fail');
                }
            }
        )
    }

}
