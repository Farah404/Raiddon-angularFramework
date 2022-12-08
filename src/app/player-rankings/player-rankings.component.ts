import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-player-rankings',
  templateUrl: './player-rankings.component.html',
  styleUrls: ['./player-rankings.component.scss']
})
export class PlayerRankingsComponent implements OnInit {
  playersRankingsData=null;
  name = 'max pipe';
  bestPlayer=null;
  bestClass=null;
  bestSpecialisation=null;
  bestEncounter=null;
  

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getPlayersRankings().subscribe((data) => {
      this.playersRankingsData = data;
      this.bestPlayer = this.playersRankingsData.filter(f => f.percentile==99.27633164633701)
      this.bestClass = this.playersRankingsData.filter(f => f.percentile==99.27633164633701)
      this.bestSpecialisation = this.playersRankingsData.filter(f => f.percentile==99.27633164633701)
      this.bestEncounter = this.playersRankingsData.filter(f => f.percentile==99.27633164633701)
    })
  }
}



@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(value: any[], prop: string) {
    if (!Array.isArray(value) || value.length === 0 || !prop) { 
      return value;
    }

    value.sort((a, b) => b[prop] - a[prop]);
    return value[0][prop];
  }
}
