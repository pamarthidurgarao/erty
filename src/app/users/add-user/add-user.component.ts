import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  labs = ["User1", "User2", "User3"];
  birthday = new Date();
  a = "hai";

  userForm = this.fb.group({
    firstName: ['', Validators.compose([
      Validators.required,
      // Validators.pattern('^[0-9]{3,9}$')
    ])],
    lastName: [''],
    email: [''],
    mobile: [''],
    password: [''],
    city: [''],
    zip: [''],
    state: [''],
    gender: [''],
    exArmy: [false],
    ph: [false],
    laboratories: new FormArray([])
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onChange(lab, isChecked: boolean) {
    const emailFormArray = <FormArray>this.userForm.controls.laboratories;

    if (isChecked) {
      emailFormArray.push(new FormControl(
        lab
      ));
    } else {
      let index = emailFormArray.controls.findIndex(x => x == lab)
      emailFormArray.removeAt(index);
    }
  }
  saveUser() {
    console.log(this.userForm.value);
    this.userService.addUser(this.userForm.value).subscribe(res => {
      debugger
      this.userForm.reset();
      this.router.navigate(['/users/list']);
    })
  }

  doEve() {
  }

  minLengthArray(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min)
        return null;

      return { 'minLengthArray': { valid: false } };
    }
  }
}
