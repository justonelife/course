import { PostsEditComponent } from './components/dashboard/posts-management/posts-edit/posts-edit.component';
import { AuthGuard } from './services/guards/auth.guard';
import { PostsCreateComponent } from './components/dashboard/posts-management/posts-create/posts-create.component';
import { PostsManagementComponent } from './components/dashboard/posts-management/posts-management.component';
import { CategoriesManagementComponent } from './components/dashboard/categories-management/categories-management.component';
import { UsersManagementComponent } from './components/dashboard/users-management/users-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { LoginAdminComponent } from './components/entrance/login/login-admin/login-admin.component';
import { LoginDecisionComponent } from './components/entrance/login/login-decision/login-decision.component';
import { LoginUserComponent } from './components/entrance/login/login-user/login-user.component';
import { LoginComponent } from './components/entrance/login/login.component';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { SingleComponent } from './components/main/single/single.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReadComponent } from './components/main/read/read.component';
import { RegisterComponent } from './components/entrance/register/register.component';
import { ForgotPasswordComponent } from './components/entrance/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSettingComponent } from './components/profile/profile-setting/profile-setting.component';
import { ProfilePasswordComponent } from './components/profile/profile-password/profile-password.component';
import { AuthUserGuard } from './services/guards/auth-user.guard';
import { SearchComponent } from './components/main/search/search.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'entrance', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthUserGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'single/:categoryURL', component: SingleComponent },
      { path: 'read/:name', component: ReadComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Admin Dashboard' },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        component: PostsManagementComponent,
        data: { title: 'Posts Management' },
        children: [
          {
            path: 'posts-create',
            component: PostsCreateComponent,
            data: { title: 'Posts Create' },
          },
          {
            path: 'posts-edit',
            component: PostsEditComponent,
            data: { title: 'Posts Edit' },
          },
        ],
      },
      {
        path: 'users',
        component: UsersManagementComponent,
        data: { title: 'Users Management' },
      },
      {
        path: 'categories',
        component: CategoriesManagementComponent,
        data: { title: ' Categories Management' },
      },
      {
        path: 'chart',
        component: ChartComponent,
        data: { title: 'Analytics' },
      },
    ],
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
          { path: 'user', component: LoginUserComponent },
        ],
      },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthUserGuard],
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings', component: ProfileSettingComponent },
      { path: 'password', component: ProfilePasswordComponent },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
