import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { PostListModule } from '../single/post-list/post-list.module';
import { LoadingModule } from '../home/loading/loading.module';



@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        PostListModule,
        LoadingModule
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule { }
