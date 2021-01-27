import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ROLE_USER } from 'src/app/services/reference';
import { PassingService } from 'src/app/services/passing.service';



@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {


    faArrowLeft = faArrowLeft;

    public username: string = '';
    public password: string = '';

    public checking: boolean = false;

    constructor(
        private router: Router,
        private loginService: AuthorizationService,
        private passing: PassingService
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
        this.checking = true;

        let info: any = {
            username: this.username,
            password: this.password
        }

        this.loginService.postLogin(info).subscribe(
            res => {
                this.checking = false;
                if (!res.error) {
                    let roleId = res.roleId;
                    if (roleId === ROLE_USER) {
                        sessionStorage.setItem('user', this.username)
                        this.router.navigate(['']);
                    }
                    else this.passing.toggleModal('login user fail, please check role');
                } else this.passing.toggleModal('login fail');
            }
        )
    }

}
