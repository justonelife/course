import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { PassingService } from 'src/app/services/passing.service';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit, OnDestroy {

    faSearch = faSearch;
    faUserCircle = faUserCircle;

    private subscription;

    public username: string;
    public isLogged: boolean = false;

    public query: string = '';
    public searching: boolean;

    constructor(
        private router: Router,
        private passing: PassingService
    ) { }

    ngOnInit(): void {
        this.username = sessionStorage.getItem('user');
        if (this.username) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

        this.subscription = this.passing.currentOnSearch.subscribe(res => this.searching = res);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSearchClick() {
        this.passing.toggleOnSearch();
        console.log('search')
        if (this.query) {
            this.router.navigate(['', 'search']);
            this.passing.searchPost(this.query.toLocaleLowerCase());
        }
    }

    onLogout = () => {
        sessionStorage.clear();
    }

}
