import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { BigGroupComponent } from './big-group/big-group.component';
import { PostListModule } from './post-list/post-list.module';
import { HomeModule } from '../home/home.module';
import { CateBreadscrumbComponent } from './cate-breadscrumb/cate-breadscrumb.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
    declarations: [
        SingleComponent,
        BigGroupComponent,
        CateBreadscrumbComponent
    ],
    imports: [
        CommonModule,
        PostListModule,
        HomeModule,
        AppRoutingModule
    ],
    exports: [
        SingleComponent
    ]
})
export class SingleModule { }
