import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-stats',
  templateUrl: './dashboard-stats.component.html',
  styleUrls: ['./dashboard-stats.component.scss']
})
export class DashboardStatsComponent implements OnInit {
  dashboardData: any = {}; // Initialize an empty object to hold the response data

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    this.http.get('http://localhost:8080/api/v1/dashboard/counts').subscribe((data: any) => {
      this.dashboardData = data;
    });
  }
}
