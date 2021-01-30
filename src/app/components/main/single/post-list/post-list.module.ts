import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostBoxComponent } from './post-box/post-box.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PagiComponent } from './pagi/pagi.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoadingModule } from '../../home/loading/loading.module';



@NgModule({
    declarations: [
        PostListComponent,
        PostBoxComponent,
        PagiComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        LoadingModule,
        AppRoutingModule,
        PipesModule
    ],
    exports: [
        PostListComponent
    ]
})
export class PostListModule { }
