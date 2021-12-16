import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDiscountValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DiscountValidatorDirective,
    multi: true
  }]
})
export class DiscountValidatorDirective implements Validator{

  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && parseFloat(control.value) < 50 ) {
      return { 'discountInvalid': true };
    }
    return null;
  }

  //constructor() { }

}
