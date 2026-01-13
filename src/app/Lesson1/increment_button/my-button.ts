import { Component } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class IncrementButton {
 
  count = 0;
  decrement() {
    this.count--;
  }
  increment() {
    this.count++;
  }
}

