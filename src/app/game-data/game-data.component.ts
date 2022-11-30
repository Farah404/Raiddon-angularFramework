import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';


@Component({
  selector: 'app-game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.scss']
})
export class GameDataComponent implements OnInit {
  playableRacesData=null;
  playableClassesData=null;
  classTalentsData=null;
  professionsData=null;
  connectedRealmsData=null;
  reputationFactionsData=null;
  racePicturesData=null;

  constructor(private api:ApiService) { }

  ngOnInit(){

    this.api.getPlayableRaces().subscribe((data) => {
      this.playableRacesData = data;
    })

    this.api.getPlayableClasses().subscribe((data) => {
      this.playableClassesData = data;
    })

    this.api.getClassTalents().subscribe((data) => {
      this.classTalentsData = data;
    })

    this.api.getProfessions().subscribe((data) => {
      this.professionsData = data;
    })

    this.api.getRealms().subscribe((data) => {
      this.connectedRealmsData = data;
    })

    this.api.getReputationFactions().subscribe((data) => {
      this.reputationFactionsData = data;
    })

    this.api.getRacesPictures().subscribe((data) => {
      this.racePicturesData = data;
    })

  }


}
