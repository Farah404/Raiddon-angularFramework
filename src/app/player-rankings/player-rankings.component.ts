import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-player-rankings',
  templateUrl: './player-rankings.component.html',
  styleUrls: ['./player-rankings.component.scss']
})
export class PlayerRankingsComponent implements OnInit {
  playersRankingsData=null;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getPlayersRankings().subscribe((data) => {
      this.playersRankingsData = data;
    })
  }

}
