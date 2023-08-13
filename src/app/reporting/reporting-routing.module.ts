import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting.component';
import { BiReportsComponent } from './bi-reports/bi-reports.component';




const routes: Routes = [
  {
    path: '',
    component: ReportingComponent, children: [
      { path: '', component: BiReportsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule { }
