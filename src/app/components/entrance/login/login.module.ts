import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginDecisionComponent } from './login-decision/login-decision.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoadingModule } from '../../main/home/loading/loading.module';



@NgModule({
    declarations: [
        LoginComponent,
        LoginDecisionComponent,
        LoginAdminComponent,
        LoginUserComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        LoadingModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }
