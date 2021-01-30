import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public option:number;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.option = this.router.url === '/profile/password' ? 2 : 1;
        
    }

    onSettingsClick() {
        this.option = 1;
        this.router.navigate(['/profile', 'settings']);
    }

    onPasswordClick() {
        this.option = 2;
        this.router.navigate(['/profile', 'password']);
    }

}
