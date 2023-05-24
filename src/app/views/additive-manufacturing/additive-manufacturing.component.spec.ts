import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditiveManufacturingComponent } from './additive-manufacturing.component';

describe('AdditiveManufacturingComponent', () => {
  let component: AdditiveManufacturingComponent;
  let fixture: ComponentFixture<AdditiveManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditiveManufacturingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditiveManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
