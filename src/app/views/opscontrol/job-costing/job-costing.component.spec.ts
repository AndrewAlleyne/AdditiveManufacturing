import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCostingComponent } from './job-costing.component';

describe('JobCostingComponent', () => {
  let component: JobCostingComponent;
  let fixture: ComponentFixture<JobCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
