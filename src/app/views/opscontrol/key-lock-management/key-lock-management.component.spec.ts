import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLockManagementComponent } from './key-lock-management.component';

describe('KeyLockManagementComponent', () => {
  let component: KeyLockManagementComponent;
  let fixture: ComponentFixture<KeyLockManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyLockManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyLockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
