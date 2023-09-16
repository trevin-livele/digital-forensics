import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'ADMIN' // Hard-coded role
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Send a POST request to the backend API with the registration data
    this.http.post<any>('http://localhost:8080/api/v1/auth/register', this.registrationData)
      .subscribe(
        (response) => {
          // On successful registration, store the access token in local storage
          localStorage.setItem('access_token', response.access_token);

          // Redirect to the user dashboard
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle registration failure here (e.g., show an error message)
        }
      );
  }
}
