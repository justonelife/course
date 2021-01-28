import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'idToName'
})
export class IdToNamePipe implements PipeTransform {

    transform(id: string, arr: any[]): string {
        let result;
        if (arr && id) result = arr.filter(val => val._id === id)[0];
        if (result) return result.name;
        return '';
    }

}
