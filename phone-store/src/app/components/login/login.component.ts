import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  login() {
    this.http.post<any>('http://127.0.0.1:8000/api/login/', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Invalid login');
      }
    });
  }
}