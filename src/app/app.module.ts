import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './components/main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EntranceModule } from './components/entrance/entrance.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthGuard } from './services/guards/auth.guard';
import { ProfileModule } from './components/profile/profile.module';
import { AuthUserGuard } from './services/guards/auth-user.guard';

@NgModule({
    declarations: [
        AppComponent, 
        PageNotFoundComponent, 
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        HttpClientModule,
        EntranceModule,
        DashboardModule,
        ProfileModule
    ],
    providers: [AuthGuard, AuthUserGuard],
    bootstrap: [AppComponent],
})
export class AppModule { }
