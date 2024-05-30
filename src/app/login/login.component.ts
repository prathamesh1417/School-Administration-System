import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  type = 'password' || 'text';
  error_var = false;
  ContactForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-zA-Z0-9]*@(?=[^\d_]*\d)[a-zA-Z0-9]*$/),
    ]),
  });
  constructor(private router: Router, private http: HttpClient) {}
  login() {
    console.log(this.ContactForm.value);
    this.http
      .post('http://localhost:5228/api/Account/login', this.ContactForm.value)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.message === 'Login completed') {
            this.router.navigateByUrl('/home-page');
            this.ContactForm.reset();
            this.error_var = false;
          } else {
            this.error_var = true;
          }
        },
        error: (error) => {
          console.log(error);
          this.error_var = true;
          // alert('wrong credentials');
        },
      });
    // this.router.navigate(['/home-page/user-list']);
  }
}
