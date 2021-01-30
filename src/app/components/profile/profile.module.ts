import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MainModule } from '../main/main.module';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';



@NgModule({
    declarations: [
        ProfileComponent,
        ProfileSettingComponent,
        ProfilePasswordComponent
    ],
    imports: [
        CommonModule,
        MainModule,
        AppRoutingModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule { }
