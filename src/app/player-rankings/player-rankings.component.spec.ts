import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRankingsComponent } from './player-rankings.component';

describe('PlayerRankingsComponent', () => {
  let component: PlayerRankingsComponent;
  let fixture: ComponentFixture<PlayerRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRankingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
