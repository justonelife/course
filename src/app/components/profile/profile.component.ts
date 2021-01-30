import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public option:number = 2;

    constructor() { }

    ngOnInit(): void {
    }

    onSettingsClick() {
        this.option = 1;
    }

    onPasswordClick() {
        this.option = 2;
    }

}
