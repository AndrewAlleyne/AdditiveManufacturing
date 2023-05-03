import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedMaintenanceComponent } from './predicted-maintenance.component';

describe('PredictedMaintenanceComponent', () => {
  let component: PredictedMaintenanceComponent;
  let fixture: ComponentFixture<PredictedMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictedMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictedMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
