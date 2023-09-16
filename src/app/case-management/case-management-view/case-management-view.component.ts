import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // Import HttpParams

import { ApiResponse, Case } from '../model/case.model';

@Component({
  selector: 'app-case-management-view',
  templateUrl: './case-management-view.component.html',
  styleUrls: ['./case-management-view.component.scss']
})
export class CaseManagementViewComponent implements OnInit {
  baseUrl = 'http://localhost:8080';
  cases: Case[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Get the access token from local storage
    const token = localStorage.getItem('access_token'); // Ensure 'auth_token' matches your token key

    if (token) {
      // Create an options object with headers containing the access token
      const options = {
        headers: {
          'Content-Type': 'application/json', // Set Content-Type to application/json
          Authorization: `Bearer ${token}`,
          accept: '*/*'
        },
        // Use HttpParams to include pagination parameters
        params: new HttpParams()
          .set('pageNo', '0')
          .set('pageSize', '10')
          .set('sortBy', 'id')
          .set('sortDir', 'asc')
      };

      // Make a GET request with the options containing the access token and pagination parameters
      this.http.get<ApiResponse>(`${this.baseUrl}/api/v1/cases`, options).subscribe(
        (response) => {
          this.cases = response.content;
        },
        (error) => {
          console.error('Error fetching cases', error);
        }
      );
    } else {
      // Handle the case where the access token is not available
      console.error('Access token not found');
    }
  }
}
