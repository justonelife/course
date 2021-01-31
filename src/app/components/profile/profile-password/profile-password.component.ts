import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'; 

@Component({
    selector: 'app-profile-password',
    templateUrl: './profile-password.component.html',
    styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {

    public passForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.passForm = this.fb.group({
            currentPass: [''],
            newPass: [''],
            confirmPass: ['', this.MatchPassword.bind(this)]
        });
    }

    MatchPassword(control: AbstractControl): { [key: string]: any } | null {
        const pass: string = this.passForm
            ? this.passForm.value.newPass
            : null;
        
        const repass: string = control.value;
        if (pass === repass) return null;
        return {
            'notMatch': true
        }
    }

    onChangePassClick() {
        const value = this.passForm.value;
        if (value.currentPass && value.newPass && value.confirmPass && this.passForm.valid) {
            console.log('valid');
        } else  console.log('hold');
    }

}
