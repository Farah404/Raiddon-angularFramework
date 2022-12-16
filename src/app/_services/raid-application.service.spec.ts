import { TestBed } from '@angular/core/testing';

import { RaidApplicationService } from './raid-application.service';

describe('RaidApplicationService', () => {
  let service: RaidApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
