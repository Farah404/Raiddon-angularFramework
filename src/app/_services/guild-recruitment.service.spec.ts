import { TestBed } from '@angular/core/testing';

import { GuildRecruitmentService } from './guild-recruitment.service';

describe('GuildRecruitmentService', () => {
  let service: GuildRecruitmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuildRecruitmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
