import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../_services/api.service';
import { StorageService } from '../_services/storage.service';
import { Charac } from 'src/model/character';

import { User } from 'src/model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creacte-character-modal',
  templateUrl: './creacte-character-modal.component.html',
  styleUrls: ['./creacte-character-modal.component.scss']
})
export class CreacteCharacterModalComponent implements OnInit {
  playableRacesData = null;
  playableClassesData = null;
  classTalentsData = null;
  professionsData = null;
  connectedRealmsData = null;
  reputationFactionsData = null;
 

 

  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public modalRef: MdbModalRef<CreacteCharacterModalComponent>) { }



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
