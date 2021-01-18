import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-entrance',
    templateUrl: './entrance.component.html',
    styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {

    faDoorOpen = faDoorOpen;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onSwitch(event) {
        let rootUrl = this.router.url.slice(0, this.router.url.substr(1, this.router.url.length).indexOf('/') + 1);
        switch (event.currentTarget.value) {
            case 'login':
                this.router.navigate([rootUrl + '/login']);
                break;
            case 'signup':
                this.router.navigate([rootUrl + '/register']);
                break;
            default:
                break;
        }
    }
}
