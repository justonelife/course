import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoadingModule } from '../home/loading/loading.module';



@NgModule({
    declarations: [
        SideBarComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        LoadingModule
    ],
    exports: [
        SideBarComponent
    ]
})
export class SideBarModule { }
