import { Component, OnInit } from '@angular/core';
import { Liput } from '../liput';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tentti',
  templateUrl: './tentti.component.html',
  styleUrl: './tentti.component.css'
})
export class TenttiComponent {

  tulos: any;
  profileForm: FormGroup;
  liput: Array<Liput> = new Array();

  constructor() {
    this.profileForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[-zA-Z ]*$')]),
      LastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });


    this.liput.push(new Liput('peruslippu'));
    this.liput.push(new Liput('opiskelija'));
    this.liput.push(new Liput('eläkeläinen'));

    /*KOKEILUA
     if ('peruslippu' + 16) {
       this.result
     }
     else if ('opiskelija' + 10) {
       this.result
     }
     else if ('eläkeläinen' + 8) {
       this.result*/

  }

  onInputChange(event: any, liput: Liput) {
    liput.addValue(event.target.tulos);
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




  /*KOKEILUA
    tulos = "";
    result = "";
    value = "";
  
    addValue(value: any) {
  
      if (value == 'peruslippu') {
        this.tulos = this.tulos + 16;
        this.result = this.tulos
      }
  
      if (value == 'opiskelija') {
        this.tulos = this.tulos + 10;
        this.result = this.tulos
      }
  
      if (value == 'eläkeläinen') {
        this.tulos = this.tulos + 8;
        this.result = this.tulos
      }
    }*/


}
