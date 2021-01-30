import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { BigGroupComponent } from './big-group/big-group.component';
import { PostListModule } from './post-list/post-list.module';
import { CateBreadscrumbComponent } from './cate-breadscrumb/cate-breadscrumb.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { LoadingModule } from '../home/loading/loading.module';



@NgModule({
    declarations: [
        SingleComponent,
        BigGroupComponent,
        CateBreadscrumbComponent
    ],
    imports: [
        CommonModule,
        PostListModule,
        LoadingModule,
        AppRoutingModule,
        SideBarModule
    ],
    exports: [
        SingleComponent
    ]
})
export class SingleModule { }
