import { TestBed } from '@angular/core/testing';

import { PlayableCharactersService } from './playable-characters.service';

describe('PlayableCharactersService', () => {
  let service: PlayableCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayableCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
