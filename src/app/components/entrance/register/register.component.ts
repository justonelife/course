import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public username:string;
    public password:string;
    public confirmPass:string;

    constructor() { }

    ngOnInit(): void {
    }

}
