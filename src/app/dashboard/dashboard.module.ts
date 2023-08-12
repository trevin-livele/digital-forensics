import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardStatsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule

  ]
})
export class DashboardModule { }
