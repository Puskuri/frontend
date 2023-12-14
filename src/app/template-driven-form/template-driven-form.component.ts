import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {


  personForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/)]),
    id: new FormControl('', [Validators.required, Validators.pattern(/^(\d{2})(\d{2})(\d{2}[+-A])(\d{3})(\d{2})$/)]),
    acceptTerms: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.personForm.valid) {
      console.log('Form is valid:', this.personForm.value);
    } else {
      console.log('Form is invalid:', this.personForm.errors);
    }
    this.personForm.reset();
  }
}
