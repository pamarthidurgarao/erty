import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    ListUserComponent,
  ],
  providers: [UserService],
})
export class UsersModule { }
