import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileFormat'
})
export class MobileFormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    debugger
    if (args == 'sdh') {
      return value + "  dssdsds";
    } else {

      return '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + ' ' + value.substr(6, 4);
    }
  }

}
