import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { GuildApplication } from 'src/model/guildApplication';
import { GuildApplicationService } from '../_services/guild-application.service';
import { RaidApplication } from 'src/model/raidApplication copy';
import { RaidApplicationService } from '../_services/raid-application.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-pending-applications-modal',
  templateUrl: './pending-applications-modal.component.html',
  styleUrls: ['./pending-applications-modal.component.scss']
})
export class PendingApplicationsModalComponent implements OnInit {
  currentUser: any;
  raidApplications: RaidApplication[];
  filteredRaidApplications: RaidApplication[];
  guildApplications: GuildApplication[];
  filteredGuildApplications: GuildApplication[];

  constructor(public modalRef: MdbModalRef<PendingApplicationsModalComponent>,
    private storageService: StorageService,
    private raidApplicationService: RaidApplicationService,
    private guildApplicationService: GuildApplicationService
    ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.retriveRaidApplications();
    this.retriveGuildApplications()
  }

  retriveRaidApplications(): void {
    this.raidApplicationService.getAll()
    .subscribe({
      next: (data) =>{
        this.raidApplications = data;
        this.filteredRaidApplications = this.raidApplications.filter(f => f.connectedUser.id == this.currentUser.id)
        console.log(this.filteredRaidApplications)
      }
    });
  }

  retriveGuildApplications(): void {
    this.guildApplicationService.getAll()
    .subscribe({
      next: (data) =>{
        this.guildApplications = data;
        this.filteredGuildApplications = this.guildApplications.filter(f => f.connectedUser.id == this.currentUser.id)
      }
    });
  }

}
