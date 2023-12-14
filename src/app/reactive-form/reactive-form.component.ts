import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[-zA-Z ]*$')]),
      LastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      UserName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[-zA-Z ]*$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^[-zA-Z ]*$')]),
      confimpassword: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[-zA-Z ]*$')]),
      id: new FormControl('', [Validators.required, Validators.requiredTrue, Validators.pattern('[0-9a-fA-F]{4,8}')])
    })
  }

  onSubmit() {
    console.warn('profileForm.value' + this.profileForm.value.FirstName);
    console.warn('profileForm.valid:' + this.profileForm.valid);
    this.profileForm.reset();
  }

  ngOnInit() {

  }

  get FirstName() {
    return this.profileForm.get('FirstName')
  };

  get LastName() {
    return this.profileForm.get('LastName')
  };

  get email() {
    return this.profileForm.get('email')
  };

  get UserName() {
    return this.profileForm.get('UserName')
  };

  get password() {
    return this.profileForm.get('password')
  };

  get confirmpassword() {
    return this.profileForm.get('confirmpassword')
  };

  get id() {
    return this.profileForm.get('id')
  };

}



