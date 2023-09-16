import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'dashboard',
    canActivate: [],
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'data-analysis',
    canActivate: [],
    loadChildren: () =>
      import('./data-analysis/data-analysis.module').then((m) => m.DataAnalysisModule),
  },
  {
    path: 'case-management',
    canActivate: [],
    loadChildren: () =>
      import('./case-management/case-management.module').then((m) => m.CaseManagementModule),
  },
  {
    path: 'reporting',
    canActivate: [],
    loadChildren: () =>
      import('./reporting/reporting.module').then((m) => m.ReportingModule),
  },
  {
    path: 'settings',
    canActivate: [],
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'auth',
    canActivate: [],
    loadChildren: () =>
      import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  },

  { path: '**', component: PagenotfoundComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
