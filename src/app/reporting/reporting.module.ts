import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiReportsComponent } from './bi-reports/bi-reports.component';
import { SharedModule } from '../shared/shared.module';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting.component';



@NgModule({
  declarations: [
    ReportingComponent,
    BiReportsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule { }
