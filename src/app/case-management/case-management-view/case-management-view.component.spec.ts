import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementViewComponent } from './case-management-view.component';

describe('CaseManagementViewComponent', () => {
  let component: CaseManagementViewComponent;
  let fixture: ComponentFixture<CaseManagementViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseManagementViewComponent]
    });
    fixture = TestBed.createComponent(CaseManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
