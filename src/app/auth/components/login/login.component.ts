import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../models/LoginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDto = new LoginDto();

  constructor(private authS: AuthService, private router: Router) {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.authS.Login(this.loginDto).subscribe((r) => {
      console.log(r);
      this.authS.setToken(r.token);
    });
  }
}
