import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacter'
})
export class LimitCharacterPipe implements PipeTransform {

  transform(title:string, value:number): string {
    return title.slice(0, value) + '...';
  }

}
