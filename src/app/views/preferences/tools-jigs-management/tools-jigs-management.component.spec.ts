import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsJigsManagementComponent } from './tools-jigs-management.component';

describe('ToolsJigsManagementComponent', () => {
  let component: ToolsJigsManagementComponent;
  let fixture: ComponentFixture<ToolsJigsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsJigsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsJigsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
