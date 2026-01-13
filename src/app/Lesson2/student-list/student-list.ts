import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  name: string = '';
  grade: number = 0;

 students: Student[] = [
    { id: Date.now(), name: 'Alice', grade: 90 },
    { id: Date.now() + 1, name: 'Bob', grade: 80 },
    { id: Date.now() + 2, name: 'Charlie', grade: 55 },
  ];
  
  addStudent(name: string, grade: number) {
    if (!this.validate(name, grade)) {
      return;
    }
    const newStudent: Student = {
      id: Date.now(),
      name,
      grade,
    };
    this.students.push(newStudent);
    // alert('Student added successfully ✅');
    this.name = "";
    this.grade = 0;
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(student =>
      student.id !== id
    );
    alert('Student deleted successfully ✅');
  }
  validate(name: string, grade: number): boolean {
    if (!name || name.trim().length === 0) {
      alert('Name cannot be empty ❌');
      return false;
    }

    if (grade < 0 || grade > 100) {
      alert('Grade must be between 0 and 100 ❌');
      return false;
    }

  return true;
}

}
interface Student {
  id: number;
  name: string;
  grade: number;
}
