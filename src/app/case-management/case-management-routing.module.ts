import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseManagementViewComponent } from './case-management-view/case-management-view.component';
import { CaseManagementComponent } from './case-management.component';
import { AddCaseComponent } from './add-case/add-case.component';
import { AuthGuard } from '../auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: CaseManagementComponent, children: [
      { path: '', component: CaseManagementViewComponent,
      // canActivate: [AuthGuard],
    },
      // { path: '', component: AddCaseComponent }
      { path: 'add-case', component: AddCaseComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseManagementRoutingModule { }
