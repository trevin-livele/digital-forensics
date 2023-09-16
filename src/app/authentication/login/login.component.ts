import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient,private router: Router) {}

  onSubmit() {
    // Send a POST request to the backend API with the login data
    this.http.post<any>('http://localhost:8080/api/v1/auth/authenticate', this.loginData)
      .subscribe(
        (response) => {
          // Handle the response here (e.g., store tokens, navigate to dashboard)
          console.log('Login successful', response);
          localStorage.setItem('access_token', response.access_token);
          // Redirect to the dashboard or perform other actions as needed
          this.router.navigate(['/dashboard']);

        },
        (error) => {
          console.error('Login failed', error);
          // Handle login failure here (e.g., show an error message)
        }
      );
  }
}
