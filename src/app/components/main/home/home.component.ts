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
        "6012cdc9b29e7800134f6568", //tac gia van hoc
    ];

    public sideBarTitle: string = 'Bài viết mới nhất';


    constructor() { }

    ngOnInit(): void {}

}
