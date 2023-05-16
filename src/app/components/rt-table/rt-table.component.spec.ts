import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtTableComponent } from './rt-table.component';

describe('RtTableComponent', () => {
  let component: RtTableComponent;
  let fixture: ComponentFixture<RtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
