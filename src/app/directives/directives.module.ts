import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameValidateDirective } from './username-validate.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidateDirective } from './password-validate.directive';
import { EmailValidateDirective } from './email-validate.directive';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';



@NgModule({
    declarations: [
        UsernameValidateDirective,
        PasswordValidateDirective,
        EmailValidateDirective,
        ClickStopPropagationDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        UsernameValidateDirective,
        PasswordValidateDirective,
        EmailValidateDirective,
        ClickStopPropagationDirective
    ]
})
export class DirectivesModule { }
