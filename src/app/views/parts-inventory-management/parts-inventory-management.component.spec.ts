import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsInventoryManagementComponent } from './parts-inventory-management.component';

describe('PartsInventoryManagementComponent', () => {
  let component: PartsInventoryManagementComponent;
  let fixture: ComponentFixture<PartsInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsInventoryManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
