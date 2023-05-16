import { TestBed } from '@angular/core/testing';

import { Xlsx2JSONService } from './xlsx2-json.service';

describe('Xlsx2JSONService', () => {
  let service: Xlsx2JSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Xlsx2JSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
