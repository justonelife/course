import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { LoginAdminComponent } from './components/entrance/login/login-admin/login-admin.component';
import { LoginDecisionComponent } from './components/entrance/login/login-decision/login-decision.component';
import { LoginUserComponent } from './components/entrance/login/login-user/login-user.component';
import { LoginComponent } from './components/entrance/login/login.component';
import { RegisterComponent } from './components/entrance/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ReadComponent } from './components/main/read/read.component';
import { SingleComponent } from './components/main/single/single.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'single/:category', component: SingleComponent },
            { path: 'read/:name', component: ReadComponent }
        ]
    },
    {
        path: 'entrance',
        component: EntranceComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
                children: [
                    { path: '', component: LoginDecisionComponent },
                    { path: 'admin', component: LoginAdminComponent },
                    { path: 'user', component: LoginUserComponent }
                ]
            },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule,
        routes
    ]
})
export class AppRoutingModule { }
