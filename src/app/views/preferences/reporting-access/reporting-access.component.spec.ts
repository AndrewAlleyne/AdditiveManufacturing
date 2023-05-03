import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingAccessComponent } from './reporting-access.component';

describe('ReportingAccessComponent', () => {
  let component: ReportingAccessComponent;
  let fixture: ComponentFixture<ReportingAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
