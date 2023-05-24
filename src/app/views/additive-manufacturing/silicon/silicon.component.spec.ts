import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiliconComponent } from './silicon.component';

describe('SiliconComponent', () => {
  let component: SiliconComponent;
  let fixture: ComponentFixture<SiliconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiliconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiliconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
