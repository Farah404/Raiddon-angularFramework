import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../_services/api.service';
import { StorageService } from '../_services/storage.service'
import { Raid, RaidRequirement } from 'src/model/raids';
import { RaidsService } from '../_services/raids.service';
import { RaidRequirementsService } from '../_services/raid-requirements.service';

@Component({
  selector: 'app-create-raid-modal',
  templateUrl: './create-raid-modal.component.html',
  styleUrls: ['./create-raid-modal.component.scss']
})

export class CreateRaidModalComponent implements OnInit {
  playableRacesData = null;
  playableClassesData = null;
  classTalentsData = null;
  professionsData = null;
  connectedRealmsData = null;
  currentUser: any;



  constructor(public modalRef: MdbModalRef<CreateRaidModalComponent>,
    private storageService: StorageService,
    private raidReqService: RaidRequirementsService,
    private raidService: RaidsService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  raidRequirements: RaidRequirement = {
    mainClass: '',
    mainSpec: '',
    secondarySpec: '',
    mainRole: '',
    secondaryRole: '',
  }
  raid: Raid = {
    id:this.storageService.getUser().id + 25,
    raidIcon: '',
    raidName: '',
    raidZone: '',
    raidTotalEncounters: null,
    raidDate: '',
    raidPullTime: '',
    raidOffTime: '',
    raidDifficulty: '',
    raidLootSystem: '',
    raidRequirements: this.raidRequirements,
    raidLeader: this.storageService.getUser().id,
  }
  submitted = false;


saveRaidRequirements():void{
  const raidRequirementsData = {
    id:this.storageService.getUser().id + 25,
    mainClass: this.raidRequirements.mainClass,
    mainSpec: this.raidRequirements.mainSpec,
    secondarySpec: this.raidRequirements.secondarySpec,
    mainRole: this.raidRequirements.mainRole,
    secondaryRole: this.raidRequirements.secondaryRole,
  };

  this.raidReqService.create(raidRequirementsData)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
}
  saveRaid(): void {

    const raidData = {
      raidIcon: this.raid.raidIcon,
      raidName: this.raid.raidName,
      raidZone: this.raid.raidZone,
      raidTotalEncounters: this.raid.raidTotalEncounters,
      raidDate: this.raid.raidDate,
      raidPullTime: this.raid.raidPullTime,
      raidOffTime: this.raid.raidOffTime,
      raidDifficulty: this.raid.raidDifficulty,
      raidLootSystem: this.raid.raidLootSystem,
      raidRequirements: this.raidRequirements,
      raidLeader: this.storageService.getUser().id,
    }

    this.raidService.create(raidData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newRaid(): void {
    this.submitted = false;
    this.raidRequirements = {
      mainClass: '',
      mainSpec: '',
      secondarySpec: '',
      mainRole: '',
      secondaryRole: '',
    }
    this.raid = {
      raidIcon: '',
      raidName: '',
      raidZone: '',
      raidTotalEncounters: null,
      raidDate: '',
      raidPullTime: '',
      raidOffTime: '',
      raidDifficulty: '',
      raidLootSystem: '',
      raidRequirements: this.raidRequirements,
      raidLeader: this.storageService.getUser().id,
    }
  }


}
