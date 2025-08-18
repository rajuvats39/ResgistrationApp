import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public password: string = '';
  public errorMessage: string = '';
  public readonly correctPassword = 'Angular@123';

  constructor(
    private readonly router: Router
  ) { }

  onPasswordChange() {
    if (this.password && this.password !== this.correctPassword) {
      this.errorMessage = 'Invalid password, Please enter the case sensitive password.';
    } else {
      this.errorMessage = '';
    }
  }

  onLogin() {
    if (this.password === this.correctPassword) {
      this.router.navigate(['/register']);
    } else {
      this.errorMessage = 'Invalid password, Please enter the case sensitive password.';
    }
  }

}
