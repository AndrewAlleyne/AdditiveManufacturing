import { TestBed } from '@angular/core/testing';

import { PlotlyServiceService } from './plotly-service.service';

describe('PlotlyServiceService', () => {
  let service: PlotlyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlotlyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
