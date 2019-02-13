import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // form variable
  
 
  user = new UserModel();
arraydata:any = [];
  // table variable
  users: UserModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.users = this.userService.getUsers();
  }

  save() {
    
     this.arraydata = this.userService.addUser(this.user);
     console.log( 'shashi '+JSON.stringify(this.arraydata));
  }
    
}
