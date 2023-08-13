import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalysisComponent } from './data-analysis.component';
import { DataAnalysisViewComponent } from './data-analysis-view/data-analysis-view.component';
import { DataAnalysisRoutingModule } from './data-analysis-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DataAnalysisComponent,
    DataAnalysisViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataAnalysisRoutingModule

  ]
})
export class DataAnalysisModule { }
