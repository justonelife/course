import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { PassingService } from 'src/app/services/passing.service';

@Component({
    selector: 'app-entrance',
    templateUrl: './entrance.component.html',
    styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {

    faDoorOpen = faDoorOpen;
    public modalErr:string = '';

    constructor(
        private router: Router,
        private passing: PassingService
    ) { }

    ngOnInit(): void {
        this.passing.currentShowModal.subscribe(res => this.modalErr = res);
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

    onToggleModalClick() {
        this.passing.toggleModal('');
    }
}
