import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassingService {

    private showModal = new BehaviorSubject('');
    currentShowModal = this.showModal.asObservable();

    constructor() { }

    toggleModal(err:string) {
        this.showModal.next(err);
    }
}
