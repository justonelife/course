import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appUsernameValidate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: UsernameValidateDirective,
        multi: true
    }]
})
export class UsernameValidateDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl): { [key: string]: any } | null {
        return ValidateUsername(control);
    }

}

function ValidateUsername(control: AbstractControl): { [key: string]: any } | null {

    let re = /^[a-zA-Z0-9]+$/;

    if (!control.value || !control.value.match(re)) return {
        'usernameInvalid': true
    }
    return null;
}