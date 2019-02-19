import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [{
      path: 'users', component: UsersComponent, children: [
        {
          path: 'add',
          component: AddUserComponent,
        },
        {
          path: 'list',
          component: ListUserComponent
        }]
    }]
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
