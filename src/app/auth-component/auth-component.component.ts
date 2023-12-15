import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css'
})
export class AuthComponentComponent {

  profileForm: FormGroup;
  loginResult: any;

  constructor(private router: Router) {
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[-zA-Z ]*$')])
    })
  }

  get email() {
    return this.profileForm.get('password')
  };

  get password() {
    return this.profileForm.get('password')
  };

  login() {
    if (this.loginResult.invalid && this.email == this.password) {
    } else {
      this.router.navigate(['/admin']);
    }
  }


  cancel() {
    {
      this.router.navigate(['/**']);
    };
  }

}