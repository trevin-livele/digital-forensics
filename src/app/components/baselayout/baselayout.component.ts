import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss'],
})
export class BaselayoutComponent {
  currentDate = new Date().getTime();
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;
  constructor(
    private observerService: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observerService.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
    this.cd.detectChanges();
  }
}
