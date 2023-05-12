import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoryTrackingComponent } from './service-history-tracking.component';

describe('ServiceHistoryTrackingComponent', () => {
  let component: ServiceHistoryTrackingComponent;
  let fixture: ComponentFixture<ServiceHistoryTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHistoryTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceHistoryTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
