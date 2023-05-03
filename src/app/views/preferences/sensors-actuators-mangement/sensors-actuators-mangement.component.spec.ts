import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsActuatorsMangementComponent } from './sensors-actuators-mangement.component';

describe('SensorsActuatorsMangementComponent', () => {
  let component: SensorsActuatorsMangementComponent;
  let fixture: ComponentFixture<SensorsActuatorsMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorsActuatorsMangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorsActuatorsMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
