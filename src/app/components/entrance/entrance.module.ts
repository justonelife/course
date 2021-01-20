import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntranceComponent } from './entrance.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        EntranceComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FontAwesomeModule,
        LoginModule,
        FormsModule
    ],
    exports: [
        EntranceComponent
    ]
})
export class EntranceModule { }
