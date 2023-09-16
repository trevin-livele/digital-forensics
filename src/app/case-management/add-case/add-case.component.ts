import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.scss']
})
export class AddCaseComponent implements OnInit {
  baseUrl = 'http://localhost:8080';

  formData = {
    caseName: '',
    description: '',
    creationDateTime: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // No need to set headers here, move it to the onSubmit method
  }

  onSubmit() {
    // Retrieve the token from local storage
    const token = localStorage.getItem('access_token');

    // Define the HTTP headers, including the Authorization header with the token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    // Send a POST request to the API endpoint with the token in the headers
    this.http.post(`${this.baseUrl}/api/v1/cases`, this.formData, { headers })
      .subscribe(
        (response) => {
          console.log('POST request successful:', response);
          // Handle the response as needed (e.g., show a success message)
          
        },
        (error) => {
          console.error('Error:', error);
          // Handle errors (e.g., display an error message)
        }
      );
  }
}
