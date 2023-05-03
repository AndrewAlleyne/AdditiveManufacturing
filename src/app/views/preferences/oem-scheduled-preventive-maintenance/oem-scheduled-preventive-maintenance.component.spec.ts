import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemScheduledPreventiveMaintenanceComponent } from './oem-scheduled-preventive-maintenance.component';

describe('OemScheduledPreventiveMaintenanceComponent', () => {
  let component: OemScheduledPreventiveMaintenanceComponent;
  let fixture: ComponentFixture<OemScheduledPreventiveMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemScheduledPreventiveMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemScheduledPreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
