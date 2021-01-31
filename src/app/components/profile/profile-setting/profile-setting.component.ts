import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
    selector: 'app-profile-setting',
    templateUrl: './profile-setting.component.html',
    styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {

    public infoForm: FormGroup;
    public username: string;
    public email: string;

    constructor(
        private fb: FormBuilder,
        private auth: AuthorizationService
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
                this.auth.putInfo(this.infoForm.value, id).subscribe(res => this.updateInfo(res));
            } else console.log('hold')
        }
    }

    checkChange() {
        if (this.username === this.infoForm.value.username &&
            this.email === this.infoForm.value.email) return false;
        return true;
    }

    updateInfo(data: User) {
        let name = data.username;
        let email = data.email;
        this.username = name;
        this.email = email;
        sessionStorage.setItem('user', name);
        sessionStorage.setItem('email', email);
    }

}
