import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetstoreComponent } from './restore.component';

describe('RetstoreComponent', () => {
  let component: RetstoreComponent;
  let fixture: ComponentFixture<RetstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetstoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
