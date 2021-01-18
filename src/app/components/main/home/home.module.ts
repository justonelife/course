import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveGroupComponent } from './five-group/five-group.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { LoadingComponent } from './loading/loading.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
    declarations: [
        FiveGroupComponent,
        HomeComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        PipesModule
    ],
    exports: [
        FiveGroupComponent,
        HomeComponent,
        LoadingComponent
    ]
})
export class HomeModule { }
