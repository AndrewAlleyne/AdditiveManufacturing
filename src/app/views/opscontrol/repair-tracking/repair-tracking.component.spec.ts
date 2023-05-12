import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairTrackingComponent } from './repair-tracking.component';

describe('RepairTrackingComponent', () => {
  let component: RepairTrackingComponent;
  let fixture: ComponentFixture<RepairTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
