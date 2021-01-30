import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomeModule } from './home/home.module';
import { SingleModule } from './single/single.module';
import { ReadModule } from './read/read.module';



@NgModule({
    declarations: [
        MainComponent,
        NavBarComponent,
        HeadComponent,
        FootComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        AppRoutingModule,
        HomeModule,
        SingleModule,
        ReadModule
    ],
    exports: [
        MainComponent,
        NavBarComponent,
        HeadComponent,
        FootComponent
    ]
})
export class MainModule { }
