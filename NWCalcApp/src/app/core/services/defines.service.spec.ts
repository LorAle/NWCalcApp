import { TestBed } from '@angular/core/testing';

import { DefinesService } from './defines.service';

describe('DefinesService', () => {
  let service: DefinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
