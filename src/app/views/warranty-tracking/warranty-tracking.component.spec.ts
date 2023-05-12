import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyTrackingComponent } from './warranty-tracking.component';

describe('WarrantyTrackingComponent', () => {
  let component: WarrantyTrackingComponent;
  let fixture: ComponentFixture<WarrantyTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
