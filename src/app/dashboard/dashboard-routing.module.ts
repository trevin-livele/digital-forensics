import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, children: [
      { path: '', component: DashboardStatsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
