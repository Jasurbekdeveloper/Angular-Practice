import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-math-operations',
  templateUrl: './math-operations.html',
  styleUrl: './math-operations.css',
  imports: [FormsModule],
})
export class MathOperations {
  result: number = 0;
  number1: number = 0;
  number2: number = 0;

  add() {
    this.result = this.number1 + this.number2;
  }

  subtract() {
    this.result = this.number1 - this.number2;
  }

  multiply() {
    this.result = this.number1 * this.number2;
  }

  divide() {
    if (this.number2 === 0) {
      alert('0 ga bo‘lish mumkin emas');
      return;
    }
    this.result = this.number1 / this.number2;
  }
}
