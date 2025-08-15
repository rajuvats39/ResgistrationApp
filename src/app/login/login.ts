import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  password = '';
  error = '';
  readonly PLAIN_PASSWORD = 'CmW123'; // change as required

  constructor(private router: Router) { }

  login() {
    this.error = '';
    if (this.password === this.PLAIN_PASSWORD) {
      this.router.navigate(['/register']);
    } else {
      this.error = 'Invalid password';
    }
  }
}
