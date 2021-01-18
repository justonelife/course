import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

const ROLE = 'c13d1ff1-8e1e-4c5b-82c1-408a5724c776';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {


    faArrowLeft = faArrowLeft;

    public username: string = '';
    public password: string = '';

    constructor(
        private router: Router,
        private loginService: AuthorizationService    
    ) { }

    ngOnInit(): void {
    }

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
                    if (roleId === ROLE) this.router.navigate(['']);
                    else window.alert('Login User Fail');
                } else {
                    window.alert('Login Fail');
                }
            }
        )
    }

}
