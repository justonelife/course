import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'freetuts';

    constructor(
        // private titleService: Title,
        // private router: Router,
        // private activePage: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this.changeTitle();
    }

    // changeTitle = () => {
    //   this.router.events.subscribe((event) => {
    //     switch (true) {
    //       case event instanceof NavigationEnd:
    //         this.titleService.setTitle(
    //           this.activePage.firstChild.snapshot.data.title
    //         );
    //         break;

    //       default:
    //         break;
    //     }
    //   });
    // };
}
