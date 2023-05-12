import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTrackingComponent } from './equipment-tracking.component';

describe('EquipmentTrackingComponent', () => {
  let component: EquipmentTrackingComponent;
  let fixture: ComponentFixture<EquipmentTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
