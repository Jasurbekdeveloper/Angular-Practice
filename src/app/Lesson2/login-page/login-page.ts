import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  username = '';
  password = '';

  usernameError = false;
  passwordError = false;
  loginError = false;

  isLoading = false;

  login() {
    this.usernameError = !this.username;
    this.passwordError = !this.password;

    if (this.usernameError || this.passwordError) {
      return;
    }

    this.isLoading = true;
    this.loginError = false;

    // Fake API call
    setTimeout(() => {
      this.isLoading = false;

      if (this.username === 'admin' && this.password === '1234') {
        alert('Login successful ✅');
      } else {
        this.loginError = true;
      }
    }, 150);
  }
}
