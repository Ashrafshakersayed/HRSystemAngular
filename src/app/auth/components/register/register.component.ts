import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserDto } from '../../models/UserDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new UserDto();

  constructor(private authS: AuthService, private router: Router) {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.authS.Register(this.user).subscribe((r) => {
      this.router.navigate(['/auth/login']);
      console.log(r);
    });
  }
}
