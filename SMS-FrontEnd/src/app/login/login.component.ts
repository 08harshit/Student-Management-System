import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);
    return this.httpClient
      .post('http://localhost:3000/auth/login', this.loginForm.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('token', response.access_token);
          console.log(localStorage.getItem('token'));
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  token = localStorage.getItem('token');
}
