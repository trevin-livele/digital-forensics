import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';





const routes: Routes = [
  {
    path: '',
    component: SettingsComponent, children: [
      { path: '', component: SettingsViewComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
