import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  labs = ["User1", "User2", "User3"];


  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'), Validators.maxLength(30)]],
    lastName: [''],
    email: [''],
    mobile: [''],
    password: [''],
    city: [''],
    zip: [''],
    state: [''],
    gender: ['Male'],
    exArmy: [false],
    ph: [false],
    laboratories: new FormArray([], this.minLengthArray(2))
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onChange(lab, isChecked: boolean) {
    debugger
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
    debugger
  }

  minLengthArray(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min)
        return null;

      return { 'minLengthArray': { valid: false } };
    }
  }
}
