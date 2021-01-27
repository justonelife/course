import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntranceComponent } from './entrance.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeModule } from '../main/home/home.module';



@NgModule({
    declarations: [
        EntranceComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FontAwesomeModule,
        LoginModule,
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule
    ],
    exports: [
        EntranceComponent
    ]
})
export class EntranceModule { }
