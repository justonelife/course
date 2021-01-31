import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PassingService } from 'src/app/services/passing.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

    public option:number;
    public modalErr: string = '';
    private subscription;

    constructor(
        private router: Router,
        private passing: PassingService
    ) { }

    ngOnInit(): void {
        this.option = this.router.url === '/profile/password' ? 2 : 1;
        this.subscription = this.passing.currentShowModal.subscribe(res => this.modalErr = res);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSettingsClick() {
        this.option = 1;
        this.router.navigate(['/profile', 'settings']);
    }

    onPasswordClick() {
        this.option = 2;
        this.router.navigate(['/profile', 'password']);
    }

    onToggleModalClick() {
        this.passing.toggleModal('');
    }

}
