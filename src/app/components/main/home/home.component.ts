import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public topicId:string[] = [
        "600272cee2da4000131de6c3", //hoc c
        "60013f27d0b19572706caada", //lap trinh plugin
        "6002adb71b91b572332dead9", //thu thuat linux
        "6002b00281e5b600143bce61", //photoshop can ban
        "600140b04463ba0013a11e8e", //van hoc
    ]

    // public topicId:string[] = [
    //     "600272cee2da4000131de6c3", //hoc c
    // ]

    constructor() { }

    ngOnInit(): void {
    }

}
