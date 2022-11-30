import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Playablecharacter } from 'src/model/playable-character';
import { ApiService } from '../_services/api.service';


@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.scss']
})
export class UserSetupComponent implements OnInit {
  playableRacesData = null;
  playableClassesData = null;
  classTalentsData = null;
  professionsData = null;
  connectedRealmsData = null;
  reputationFactionsData = null;
  racePicturesData = null;
  private subscriptions: Subscription[] = [];
  public profileImage: File;
  public playableCharacter: Playablecharacter;
  public fileName: string;


  constructor(private api: ApiService) { }

  ngOnInit() {

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


  }

}
