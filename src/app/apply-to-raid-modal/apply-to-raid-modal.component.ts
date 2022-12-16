import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { StorageService } from '../_services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from 'src/model/user';
import { RaidApplication } from 'src/model/raidApplication copy';
import { RaidApplicationService } from '../_services/raid-application.service';
import { RaidsService } from '../_services/raids.service';
import { Raid, RaidRequirement } from 'src/model/raids';

@Component({
  selector: 'app-apply-to-raid-modal',
  templateUrl: './apply-to-raid-modal.component.html',
  styleUrls: ['./apply-to-raid-modal.component.scss']
})
export class ApplyToRaidModalComponent implements OnInit {
  id: number = this.route.snapshot.params.id
  submitted = false;
  currentUser: any;
  connectedUser: User = {}

  raidRequirements: RaidRequirement = {
    mainClass: '',
    mainSpec: '',
    secondarySpec: '',
    mainRole: '',
    secondaryRole: '',
  }
  raid: Raid = {
    raidIcon: '',
    raidName: '',
    raidZone: '',
    raidTotalEncounters: null,
    raidDate: '',
    raidPullTime: '',
    raidOffTime: '',
    raidDifficulty: '',
    raidLootSystem: '',
    raidRequirementsId: this.raidRequirements.id,
    raidLeaderId: this.storageService.getUser().id,
  }
  raidApplication: RaidApplication = {
    id:null,
    selectedRaid: this.raid,
    connectedUser: this.storageService.getUser(),
  }


  constructor(public modalRef: MdbModalRef<ApplyToRaidModalComponent>,
    private storageService: StorageService, private raidService: RaidsService,
    private raidApplicationService: RaidApplicationService,
    private route: ActivatedRoute,
    private userService : UserService) { }

    ngOnInit(): void {
      this.id = this.raidService.id;
      this.getUser();
      this.raidService.get(this.id)
        .subscribe({
          next: (data) => {
            this.raid = data;
          },
          error: (e) => console.error(e)
        });
      this.currentUser = this.storageService.getUser();
    }
  
    getGuild(id: number): void {
      this.raidService.get(id)
        .subscribe({
          next: (data) => {
            this.raid = data;
          },
          error: (e) => console.error(e)
        });
    }
  
    async getUser(): Promise<any> {
      this.connectedUser = await this.userService.getUser(this.storageService.getUser().id)
        .toPromise();
    }
  
    async applyToRaid(): Promise<any> {
      this.id = this.raidService.id;
      this.raid = await this.raidService.get(this.id).toPromise();
        this.currentUser = this.storageService.getUser();
        
      const data = {
        id: null,
        connectedUser: this.connectedUser,
        selectedRaid: this.raid,
      }
  
      this.raidApplicationService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }
  
    newGuildApplication(): void {
      this.submitted = false;
      this.raidApplication = {
        connectedUser: this.currentUser,
        selectedRaid: this.raid,
      }
    }
  
  
  }
