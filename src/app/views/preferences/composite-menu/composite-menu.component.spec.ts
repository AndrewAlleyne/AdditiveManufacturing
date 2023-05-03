import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeMenuComponent } from './composite-menu.component';

describe('CompositeMenuComponent', () => {
  let component: CompositeMenuComponent;
  let fixture: ComponentFixture<CompositeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
