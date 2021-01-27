import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appEmailValidate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidateDirective,
        multi: true
    }]
})
export class EmailValidateDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl): {[key:string]: any} | null {
        return ValidateEmail(control);
    }

}

function ValidateEmail(control: AbstractControl): {[key: string]: any} | null {
    
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!control.value || !control.value.match(re)) return {
        'emailInvalid': true
    }    
    return null;
}
