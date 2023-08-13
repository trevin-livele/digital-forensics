import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseManagementViewComponent } from './case-management-view/case-management-view.component';
import { CaseManagementComponent } from './case-management.component';


const routes: Routes = [
  {
    path: '',
    component: CaseManagementComponent, children: [
      { path: '', component: CaseManagementViewComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseManagementRoutingModule { }
