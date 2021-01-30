import { PagingComponent } from './paging.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [PagingComponent],
    imports: [
        CommonModule
    ],
    exports: [PagingComponent]
})
export class PagingModule { }
