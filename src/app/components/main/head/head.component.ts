import { Component, OnInit } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

    faSearch = faSearch;
    faUserCircle = faUserCircle;

    public username: string
    public isLogged: boolean = false

    constructor() { }

    ngOnInit(): void {
        this.username = sessionStorage.getItem('user');
        if (this.username) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
        // console.log(this.username);
    }

    onLogout = () => {
        sessionStorage.removeItem('user')
    }

}
