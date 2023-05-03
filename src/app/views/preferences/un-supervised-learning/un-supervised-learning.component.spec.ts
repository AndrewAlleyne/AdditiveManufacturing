import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSupervisedLearningComponent } from './un-supervised-learning.component';

describe('UnSupervisedLearningComponent', () => {
  let component: UnSupervisedLearningComponent;
  let fixture: ComponentFixture<UnSupervisedLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnSupervisedLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnSupervisedLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
