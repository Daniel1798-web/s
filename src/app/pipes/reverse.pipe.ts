import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
a: Array<string> = ["a","b"];
  transform(value: string) : string {
    return value.substring(0,25);

  }

}


/*return value.split('').map(leter => leter.replace('a', '4')
.replace('e', '3')
.replace('i', '1')
.replace('o', '0')
.replace('u', '11')).join('');
*/
