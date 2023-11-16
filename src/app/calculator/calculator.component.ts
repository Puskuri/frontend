import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  tulos = "";
  result = "";
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  addValue(value: any) {
    console.log('addValue value: ' + value);

    if (value >= 0 && value <= 9) {
      this.tulos = this.tulos + value;
      console.log('lausekkeen arvo on: ' + this.tulos);
      this.result = value
    }

    if (value == '=') {
      console.log('lausekkeen arvo on: ' + eval(this.tulos));
      this.result = eval(this.tulos)
    }

    if (value == 'C') {
      this.tulos = ""
      console.log('lausekkeen arvo on: ' + 0);
    }

    if (value == '*') {
      this.tulos = this.tulos + value;
      this.result = value
    }

    if (value == '/') {
      this.tulos = this.tulos + value;
      this.result = value
    }

    if (value == '+') {
      this.tulos = this.tulos + value;
      this.result = value
    }

    if (value == '-') {
      this.tulos = this.tulos + value;
      this.result = value
    }

  }
}
