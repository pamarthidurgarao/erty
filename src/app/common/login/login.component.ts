import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobileNo: number = 0;
  password: string = '';
  error: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
//    debugger
    this.userService.login(this.mobileNo, this.password).subscribe(res => {
      console.log(res);
      if (res.status) {
        this.router.navigate(['dashboard']);
        localStorage.setItem("user", res.user_data);
      } else {
        this.error = res.msg;
      }
    })
  }
}
