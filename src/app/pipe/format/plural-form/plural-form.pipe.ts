import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralForm'
})
export class PluralFormPipe implements PipeTransform {

  transform(forms: any[], value?: any): any {
    value = Math.abs(value);

    value %= 100;
    if (value >= 5 && value <= 20) {
      return forms[2];
    }
    value %= 10;
    if (value === 1) {
      return forms[0];
    }
    if (value >= 2 && value <= 4) {
      return forms[1];
    }
    return forms[2];
  }
}
