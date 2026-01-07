import { Component } from '@angular/core';

@Component({
  selector: 'app-math-operations',
  templateUrl: './math-operations.html',
  styleUrl: './math-operations.css',
})
export class MathOperations {
  result: number = 0;

  add(a: number, b: number) {
    this.result = a + b;
  }

  subtract(a: number, b: number) {
    this.result = a - b;
  }

  multiply(a: number, b: number) {
    this.result = a * b;
  }

  divide(a: number, b: number) {
    if (b === 0) {
      alert('0 ga bo‘lish mumkin emas');
      return;
    }
    this.result = a / b;
  }
}
