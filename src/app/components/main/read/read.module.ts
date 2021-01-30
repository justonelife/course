import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read.component';
import { SideBarModule } from '../side-bar/side-bar.module';
import { LoadingModule } from '../home/loading/loading.module';



@NgModule({
    declarations: [
        ReadComponent
    ],
    imports: [
        CommonModule,
        SideBarModule,
        LoadingModule
    ],
    exports: [
        ReadComponent
    ]
})
export class ReadModule { }
