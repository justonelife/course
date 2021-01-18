import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { BigGroupComponent } from './big-group/big-group.component';
import { PostListModule } from './post-list/post-list.module';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    SingleComponent,
    BigGroupComponent
  ],
  imports: [
    CommonModule,
    PostListModule,
    HomeModule
  ],
  exports: [
    SingleComponent
  ]
})
export class SingleModule { }
