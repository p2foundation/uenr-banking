import { TestBed } from '@angular/core/testing';

import { PreviousRouteServicesService } from './previous-route-services.service';

describe('PreviousRouteServicesService', () => {
  let service: PreviousRouteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousRouteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
