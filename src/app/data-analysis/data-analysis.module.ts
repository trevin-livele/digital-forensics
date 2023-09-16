import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalysisComponent } from './data-analysis.component';
import { DataAnalysisViewComponent } from './data-analysis-view/data-analysis-view.component';
import { DataAnalysisRoutingModule } from './data-analysis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { RadarDataViewComponent } from './radar-data-view/radar-data-view.component';



@NgModule({
  declarations: [
    DataAnalysisComponent,
    DataAnalysisViewComponent,
    RadarDataViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataAnalysisRoutingModule,
    NgChartsModule

  ]
})
export class DataAnalysisModule { }
