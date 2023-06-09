import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesManagementComponent } from './machines-management.component';

describe('MachinesManagementComponent', () => {
  let component: MachinesManagementComponent;
  let fixture: ComponentFixture<MachinesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
