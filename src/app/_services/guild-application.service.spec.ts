import { TestBed } from '@angular/core/testing';

import { GuildApplicationService } from './guild-application.service';

describe('GuildApplicationService', () => {
  let service: GuildApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuildApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
