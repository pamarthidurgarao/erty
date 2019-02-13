import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4),, Validators.maxLength(6)]],
    lastName: [''],
    email: [''],
    mobile: [''],
    password: [''],
    city: [''],
    zip: [''],
    state: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  saveUser() {
    console.log(this.userForm.value);
    debugger
  }

}
