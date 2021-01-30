import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveGroupComponent } from './five-group/five-group.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { LoadingModule } from './loading/loading.module';



@NgModule({
    declarations: [
        FiveGroupComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        PipesModule,
        AppRoutingModule,
        SideBarModule,
        LoadingModule
    ],
    exports: [
        FiveGroupComponent,
        HomeComponent
    ]
})
export class HomeModule { }
