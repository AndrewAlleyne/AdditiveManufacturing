import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataBaseComponent } from './customer-data-base.component';

describe('CustomerDataBaseComponent', () => {
  let component: CustomerDataBaseComponent;
  let fixture: ComponentFixture<CustomerDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDataBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
