import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const BASE_URL = "/api_new/user_signup";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<UserModel>;

  constructor(private http: HttpClient) {
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

  public addUser(obj: any): Observable<any> {
    const req = new HttpParams()
      .set('user_mobile', obj.mobile)
      .set('user_full_name', obj.firstName)
      .set('user_last_name', obj.lastName)
      .set('user_password', obj.password)
      .set('user_email', obj.email)
      .set('user_pincode', obj.zip)

    return this.http.post(BASE_URL, req.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  public login(mobileNo: any, password: string): Observable<any> {
    const req = new HttpParams()
      .set('user_mobile', mobileNo)
      .set('user_password', password)
    return this.http.post("/api_new/login", req, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
  }
}
