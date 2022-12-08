import { TestBed } from '@angular/core/testing';

import { RaidRequirementsService } from './raid-requirements.service';

describe('RaidRequirementsService', () => {
  let service: RaidRequirementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidRequirementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
