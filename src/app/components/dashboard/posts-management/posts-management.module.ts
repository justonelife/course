import { PagingModule } from './../paging/paging.module';
import { PipesModule } from './../../../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './../../main/home/home.module';
import { PostsManagementComponent } from './posts-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { NgxEditorModule } from 'ngx-editor';
import { PostsEditComponent } from './posts-edit/posts-edit.component';

@NgModule({
  declarations: [
    PostsCreateComponent,
    PostsManagementComponent,
    PostsEditComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    NgxEditorModule,
    PipesModule,
    PagingModule,
  ],
  exports: [PostsManagementComponent],
})
export class PostsManagementModule {}
