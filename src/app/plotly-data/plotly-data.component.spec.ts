import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyDataComponent } from './plotly-data.component';

describe('PlotlyDataComponent', () => {
  let component: PlotlyDataComponent;
  let fixture: ComponentFixture<PlotlyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotlyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotlyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
