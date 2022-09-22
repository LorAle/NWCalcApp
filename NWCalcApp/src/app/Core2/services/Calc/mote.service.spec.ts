import { TestBed } from '@angular/core/testing';

import { MoteService } from './mote.service';

describe('MoteService', () => {
  let service: MoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
