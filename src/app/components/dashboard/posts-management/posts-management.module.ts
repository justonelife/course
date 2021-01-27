import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './../../main/home/home.module';
import { PostsManagementComponent } from './posts-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
    declarations: [PostsCreateComponent, PostsManagementComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        FontAwesomeModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule,
        NgxEditorModule,
    ],
    exports: [PostsManagementComponent],
})
export class PostsManagementModule { }
