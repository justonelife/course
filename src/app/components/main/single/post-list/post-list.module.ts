import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostBoxComponent } from './post-box/post-box.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PagiComponent } from './pagi/pagi.component';
import { HomeModule } from '../../home/home.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PostListComponent,
    PostBoxComponent,
    PagiComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    HomeModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostListModule { }
