import { PagingModule } from './../paging/paging.module';
import { PipesModule } from './../../../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { PostsManagementComponent } from './posts-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LoadingModule } from '../../main/home/loading/loading.module';

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
    LoadingModule,
    PipesModule,
    PagingModule,
    EditorModule
  ],
  exports: [PostsManagementComponent],
})
export class PostsManagementModule { }
