import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ROLE_ADMIN } from 'src/app/services/reference';
import { PassingService } from 'src/app/services/passing.service';



@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

    faArrowLeft = faArrowLeft;

    public username: string = '';
    public password: string = '';

    public checking: boolean = false;

    constructor(
        private router: Router,
        private loginService: AuthorizationService,
        private passing: PassingService
    ) { }

    ngOnInit(): void { }

    onBackClick() {
        let currentUrl = this.router.url;
        let reverseUrl = currentUrl.split('').reverse().join('');
        let lastPlash = reverseUrl.indexOf('/');
        this.router.navigate([currentUrl.slice(0, currentUrl.length - lastPlash)]);
    }

    onLoginClick() {
        this.checking = !this.checking;

        let info: any = {
            username: this.username,
            password: this.password
        }


        this.loginService.postLogin(info).subscribe(
            res => {
                this.checking = !this.checking;
                if (!res.error) {
                    let roleId = res.roleId;
                    if (roleId === ROLE_ADMIN) {
                        this.router.navigate(['', 'dashboard']);
                        sessionStorage.setItem('admin', this.username)
                    }
                    else this.passing.toggleModal('login admin fail, please check role');
                } else this.passing.toggleModal('login fail');
            }
        )
    }

}
