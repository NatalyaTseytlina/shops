import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetters'
})
export class FirstLettersPipe implements PipeTransform {

  transform(value: string, lettersCount = 2): string {
    if (!value) {
      return '';
    }

    return value.split(' ').slice(0, lettersCount).map(s => s.charAt(0)).join('').toUpperCase();
  }

}
