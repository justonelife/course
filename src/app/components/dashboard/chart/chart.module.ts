import { ChartComponent } from './chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../../main/home/loading/loading.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PagingModule } from '../paging/paging.module';
import { PostsStatiticsComponent } from './posts-statitics/posts-statitics.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';

@NgModule({
  declarations: [ChartComponent, PostsStatiticsComponent, DonutGraphComponent],
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
  ],
  exports: [ChartComponent],
})
export class ChartModule {}
