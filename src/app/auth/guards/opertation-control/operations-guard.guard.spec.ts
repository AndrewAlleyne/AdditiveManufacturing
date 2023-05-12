import { TestBed } from '@angular/core/testing';

import { OperationsGuardGuard } from './operations-guard.guard';

describe('OperationsGuardGuard', () => {
  let guard: OperationsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OperationsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
