import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianManagementComponent } from './technician-management.component';

describe('TechnicianManagementComponent', () => {
  let component: TechnicianManagementComponent;
  let fixture: ComponentFixture<TechnicianManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
