import { Component, signal } from '@angular/core';
import { IncrementButton } from './Lesson1/increment_button/my-button';
import { MathOperations } from './Lesson1/math-operations/math-operations';
import { StudentList } from './Lesson2/student-list/student-list';
import { LoginPage } from './Lesson2/login-page/login-page';

@Component({
  selector: 'app-root',
  imports: [IncrementButton, MathOperations,StudentList,LoginPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('math-platform');
}
