import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommonFunctionService {

    constructor() { }

    extractTime(time: Date): { _from: string, _current: string } {
        let year = time.getFullYear();
        let month = time.getMonth();
        let result = new Date(year, month, 1, 0, 0);
        return {_from: result.toISOString(), _current: time.toISOString()};
    }

    swap(arr: any[], a: number, b: number): void {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    partition(arr: string[], obj: {[key: string]: number}, low: number, high: number): number {
        let pivot = obj[arr[high]];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (obj[arr[j]] > pivot) {
                i++;
                this.swap(arr, i, j);
            }
        }
        this.swap(arr, i + 1, high);
        return i + 1;
    }

    sortView(arr: string[], obj:{[key: string]: number}, low: number, high: number): void {
        if (low < high) {
            let pi = this.partition(arr, obj, low, high);
            this.sortView(arr, obj, low, pi - 1);
            this.sortView(arr, obj, pi + 1, high);
        }
    }
}
