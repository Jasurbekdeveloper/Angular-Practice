import { Component, signal } from '@angular/core';
import { MyButton } from './my-button/my-button';
import { MathOperations } from './math-operations/math-operations';

@Component({
  selector: 'app-root',
  imports: [MyButton, MathOperations],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('math-platform');
}
