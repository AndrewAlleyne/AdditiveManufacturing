import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteraleTableComponent } from './filterale-table.component';

describe('FilteraleTableComponent', () => {
  let component: FilteraleTableComponent;
  let fixture: ComponentFixture<FilteraleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteraleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteraleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
