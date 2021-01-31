import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { DataPostService } from 'src/app/services/data-post.service';
import { PassingService } from 'src/app/services/passing.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

    public post: Post[] | undefined;
    public searching: boolean = false;

    private subscription;

    constructor(
        private passing: PassingService,
        private dataPost: DataPostService
    ) { }

    ngOnInit(): void {
        this.subscription = this.passing.currentSearch.subscribe(res => {
            if (res) {
                this.variableReset();
                this.search(res);
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    search(s: string) {
        this.searching = !this.searching;
        let sub = this.dataPost.getSearchPost(s).subscribe(res => {
            this.post = res;
            this.searching = !this.searching;
            this.passing.toggleOnSearch();
            sub.unsubscribe();
        });
    }

    variableReset() {
        if (this.post) this.post.splice(0, this.post.length);
        this.post = undefined;
    }

}
