import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsComponent,
    SettingsViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    FormsModule
  ]
})
export class SettingsModule { }
