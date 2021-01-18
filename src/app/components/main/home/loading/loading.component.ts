import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

    @Input() size:'small' | 'medium';

    public wh:number;
    public bdw:number;

    constructor() { }

    ngOnInit(): void {
        switch (this.size) {
            case 'small':
                this.wh = 20;
                this.bdw = 5;
                break;
            case 'medium':
                this.wh = 50;
                this.bdw = 8;
            default:
                break;
        } 
    }

}
