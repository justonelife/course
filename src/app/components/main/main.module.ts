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
import { ReadComponent } from './read/read.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
    HeadComponent,
    FootComponent,
    ReadComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    HomeModule,
    SingleModule
  ],
  exports: [
    MainComponent,
    NavBarComponent,
    HeadComponent,
    FootComponent
  ]
})
export class MainModule { }
