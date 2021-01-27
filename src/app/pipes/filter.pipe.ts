import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items || !searchText) {
            return items;
        } else {
            if (items[0].username)
                return items.filter(
                    (user) =>
                        user.username.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                );
            else if (items[0].name)
                return items.filter(
                    (cate) =>
                        cate.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                );
        }
    }
}
