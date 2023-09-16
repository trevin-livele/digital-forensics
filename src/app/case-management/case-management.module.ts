import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseManagementComponent } from './case-management.component';
import { CaseManagementViewComponent } from './case-management-view/case-management-view.component';
import { SharedModule } from "../shared/shared.module";
import { CaseManagementRoutingModule } from './case-management-routing.module';
import { AddCaseComponent } from './add-case/add-case.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CaseManagementComponent,
        CaseManagementViewComponent,
        AddCaseComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CaseManagementRoutingModule,
        FormsModule
    ]
})
export class CaseManagementModule { }
