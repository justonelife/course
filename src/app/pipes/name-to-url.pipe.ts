import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameToUrl'
})
export class NameToUrlPipe implements PipeTransform {

  transform(name:string): string {
    let result: string;
    let re1 = /\s*\-\s*/;
    let re2 = /\s+/;

    result = name.replace(re1, '-');
    result = result.split(re2).join('-');

    return result;
  }

}
