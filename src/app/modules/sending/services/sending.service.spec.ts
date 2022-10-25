import { TestBed } from '@angular/core/testing';

import { SendingService } from './sending.service';

describe('SendingService', () => {
  let service: SendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
