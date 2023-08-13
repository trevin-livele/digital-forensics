import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseManagementComponent } from './case-management.component';
import { CaseManagementViewComponent } from './case-management-view/case-management-view.component';
import { SharedModule } from "../shared/shared.module";
import { CaseManagementRoutingModule } from './case-management-routing.module';



@NgModule({
    declarations: [
        CaseManagementComponent,
        CaseManagementViewComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CaseManagementRoutingModule
    ]
})
export class CaseManagementModule { }
