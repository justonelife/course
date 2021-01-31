import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { PassingService } from 'src/app/services/passing.service';

@Component({
    selector: 'app-profile-setting',
    templateUrl: './profile-setting.component.html',
    styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {

    public infoForm: FormGroup;
    public username: string;
    public email: string;
    
    public updating: boolean = false;

    constructor(
        private fb: FormBuilder,
        private auth: AuthorizationService,
        private passing: PassingService
    ) { }

    ngOnInit(): void {
        this.username = sessionStorage.getItem('user');
        this.email = sessionStorage.getItem('email');
        this.infoForm = this.fb.group({
            username: [this.username],
            email: [this.email]
        });
    }

    onUpdateClick() {

        let id: string = sessionStorage.getItem('id');

        if (this.checkChange()) {

            if (this.infoForm.valid) {
                this.updating = !this.updating;
                let subscription = this.auth.putInfo(this.infoForm.value, id).subscribe(res => {
                    this.updating = !this.updating;
                    res.error ? this.passing.toggleModal(res.error) : this.updateInfo(res);
                    subscription.unsubscribe();
                });
            } else this.passing.toggleModal('invalid info');
            
        }
    }

    checkChange() {
        if (this.username === this.infoForm.value.username &&
            this.email === this.infoForm.value.email) return false;
        return true;
    }

    updateInfo(data: User) {
        this.passing.toggleModal('your information is updated')
        let name = data.username;
        let email = data.email;
        this.username = name;
        this.email = email;
        sessionStorage.setItem('user', name);
        sessionStorage.setItem('email', email);
    }

}
