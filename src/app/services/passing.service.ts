import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassingService {

    private showModal = new BehaviorSubject('');
    currentShowModal = this.showModal.asObservable();

    private search = new BehaviorSubject('');
    currentSearch = this.search.asObservable();

    private onSearch = new BehaviorSubject(false);
    currentOnSearch = this.onSearch.asObservable();

    constructor() { }

    toggleModal(err:string) {
        this.showModal.next(err);
    }

    searchPost(s:string) {
        this.search.next(s);
    }

    toggleOnSearch() {
        let value = this.onSearch.value;
        this.onSearch.next(!value);
    }
}
