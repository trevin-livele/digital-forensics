import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaselayoutComponent } from '../components/baselayout/baselayout.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    BaselayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    
  ],
  exports: [
    RouterModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    // components
    BaselayoutComponent,
  ]
})
export class SharedModule { }
