import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisedLearningComponent } from './supervised-learning.component';

describe('SupervisedLearningComponent', () => {
  let component: SupervisedLearningComponent;
  let fixture: ComponentFixture<SupervisedLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisedLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisedLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
