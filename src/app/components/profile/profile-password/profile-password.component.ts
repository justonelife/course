import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'; 
import { AuthorizationService } from 'src/app/services/authorization.service';
import { PassingService } from 'src/app/services/passing.service';

@Component({
    selector: 'app-profile-password',
    templateUrl: './profile-password.component.html',
    styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {

    public passForm: FormGroup;

    public updating: boolean = false;

    constructor(
        private fb: FormBuilder,
        private auth: AuthorizationService,
        private passing: PassingService
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
            this.updating = !this.updating;
            this.verify();
        } else  this.passing.toggleModal('invalid input');
    }

    verify() {
        let username = sessionStorage.getItem('user');
        let password = this.passForm.value.currentPass;

        let subscription = this.auth.postLogin({username, password}).subscribe(res => {
            
            if (!res.error) this.changePass(res._id);
            else {
                this.updating = !this.updating;
                this.passing.toggleModal('your current password is wrong');
            }
            subscription.unsubscribe();
        })
    }

    changePass(id: string) {
        let info = {
            password: this.passForm.value.newPass,
            email: sessionStorage.getItem('email')
        }
        let subscription = this.auth.putInfo(info, id).subscribe(() => {
            this.updating = !this.updating;
            this.passing.toggleModal('your password is updated');
            subscription.unsubscribe();
        })
    }

}
