import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAComponent } from './policy-a.component';

describe('PolicyAComponent', () => {
  let component: PolicyAComponent;
  let fixture: ComponentFixture<PolicyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
