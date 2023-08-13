import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAnalysisComponent } from './data-analysis.component';
import { DataAnalysisViewComponent } from './data-analysis-view/data-analysis-view.component';



const routes: Routes = [
  {
    path: '',
    component: DataAnalysisComponent, children: [
      { path: '', component: DataAnalysisViewComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataAnalysisRoutingModule { }
