import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MainModule } from '../main/main.module';



@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        MainModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule { }
