import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<UserModel>;

  constructor() {
    this.users = [];
    let user = new UserModel();
    user.userCity = "Hyderabad";
    user.userEmail = "qwerty@gmail.com";
    user.userFirstName = "QWERTY";
    user.userLastName = "ASDFG";
    user.userPassword = "******";
    user.userState = "TS";
    user.userZip = 21312;
    this.users.push(user);
    this.users.push(user);
    this.users.push(user);
    this.users.push(user);
  }

  getUsers(): UserModel[] {
    return this.users
  }

  addUser(user: UserModel) {
    this.users.push(user);
  }
}
