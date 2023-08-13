import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalysisViewComponent } from './data-analysis-view.component';

describe('DataAnalysisViewComponent', () => {
  let component: DataAnalysisViewComponent;
  let fixture: ComponentFixture<DataAnalysisViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalysisViewComponent]
    });
    fixture = TestBed.createComponent(DataAnalysisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
