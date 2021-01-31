import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { PassingService } from 'src/app/services/passing.service';
import { ROLE_USER } from 'src/app/services/reference';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    public checking: boolean = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthorizationService,
        private passing: PassingService
    ) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            username: [''],
            password: [''],
            repass: ['', [this.MatchPassword.bind(this)]],
            email: ['']
        })
    }

    MatchPassword(control: AbstractControl): { [key: string]: any } | null {
        const pass: string = this.registerForm
            ? this.registerForm.value.password
            : null;
        
        const repass: string = control.value;
        if (pass === repass) return null;
        return {
            'notMatch': true
        }
    }

    onSignupClick(): void {
        this.checking = !this.checking;

        if (this.registerForm.valid) {

            const { username, password, email } = this.registerForm.value;

            this.authService.postRegister({ username, password, email }).subscribe(res => this.assignRole(res));

        } else {
            this.checking = !this.checking;
            this.passing.toggleModal('register fail! invalid info');
        }
    }

    assignRole(res:User) {
        this.authService.putAssignRole(res._id, ROLE_USER).subscribe(success => {
            this.checking = !this.checking;
            if (success) {
                this.passing.toggleModal('success! now you can login.');
                this.registerForm.reset();
            }
            else this.passing.toggleModal('register fail');
        });
    }

}