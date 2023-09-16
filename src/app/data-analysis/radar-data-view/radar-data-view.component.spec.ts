import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarDataViewComponent } from './radar-data-view.component';

describe('RadarDataViewComponent', () => {
  let component: RadarDataViewComponent;
  let fixture: ComponentFixture<RadarDataViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadarDataViewComponent]
    });
    fixture = TestBed.createComponent(RadarDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
