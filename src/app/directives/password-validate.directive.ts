import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appPasswordValidate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordValidateDirective,
        multi: true
    }]
})
export class PasswordValidateDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl): {[key:string]: any} | null {
        return ValidatePassword(control);
    }

}

function ValidatePassword(control: AbstractControl): {[key:string]: any} | null {
    
    let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    let re1 = /[`"']/g

    if (!control.value || !control.value.match(re) || control.value.match(re1)) return {
        'passwordInvalid': true
    }
    return null;
}