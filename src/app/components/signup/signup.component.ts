import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authService: AuthService) { }
  signup(signupForm: NgForm) {
    console.log(signupForm.value)
    this.authService.registerUser(signupForm.value.email, signupForm.value.password)
  }
}
