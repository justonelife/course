import { PostsManagementModule } from './posts-management/posts-management.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { HomeModule } from '../main/home/home.module';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { PagingComponent } from './paging/paging.component';

@NgModule({
    declarations: [
        DashboardComponent,
        UsersManagementComponent,
        CategoriesManagementComponent,
        PagingComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        PipesModule,
        HomeModule,
        Ng2OrderModule,
        PostsManagementModule,
    ],
    exports: [DashboardComponent],
})
export class DashboardModule { }
