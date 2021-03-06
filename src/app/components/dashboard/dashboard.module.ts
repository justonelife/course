import { ChartModule } from './chart/chart.module';
import { PagingModule } from './paging/paging.module';
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
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { LoadingModule } from '../main/home/loading/loading.module';
import { DashboardDecisionComponent } from './dashboard-decision/dashboard-decision.component';

@NgModule({
    declarations: [
        DashboardComponent,
        UsersManagementComponent,
        CategoriesManagementComponent,
        DashboardDecisionComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        PipesModule,
        LoadingModule,
        Ng2OrderModule,
        PostsManagementModule,
        ChartModule,
        PagingModule,
    ],
    exports: [DashboardComponent],
})
export class DashboardModule { }
