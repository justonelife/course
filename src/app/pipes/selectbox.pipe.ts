import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectbox',
})
export class SelectboxPipe implements PipeTransform {
  transform(value: any, select?: any): any {
    // console.log('select:', select);
    // console.log('value', value);
    if (!select) {
      return value;
    } else {
      return value
        ? value.filter((data) => {
            return data.categoryId === select;
          })
        : value;
    }
  }
}
