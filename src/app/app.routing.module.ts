import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { LoginComponent } from './common/login/login.component';
import { ProductnameComponent } from './product/productname/productname.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { Comp2compComponent } from './common/comp2comp/comp2comp.component';





const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children:
      [
        {
          path: 'users', component: UsersComponent, children: [
            {
              path: 'add',
              component: AddUserComponent,
            },
            {
              path: 'list',
              component: ListUserComponent
            }
          ]

        },
        {
          path: 'products', component: ProductnameComponent, children: [
            {
              path: 'addproduct',
              component: AddproductComponent,
            },
            {
              path: 'listproduct',
              component: ListproductComponent
            }
          ]
        },

      ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'comp2comp', component: Comp2compComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
