import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../_services/api.service';
import { StorageService } from '../_services/storage.service'
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';

@Component({
  selector: 'app-create-guild-modal',
  templateUrl: './create-guild-modal.component.html',
  styleUrls: ['./create-guild-modal.component.scss']
})
export class CreateGuildModalComponent implements OnInit {
  playableRacesData = null;
  playableClassesData = null;
  classTalentsData = null;
  professionsData = null;
  connectedRealmsData = null;
  currentUser: any;

  guild: Guild = {
    rank: null,
    totalPlayers: null,
    raidsPerWeek: null,
    guildName: '',
    realm: '',
    activities: '',
    guildEmblem: '',
    wowLogLink: '',
    slogan: '',
    objectives: '',
    recruiting: false,
    lootSystems: '',
  };
  submitted = false;

  constructor(public modalRef: MdbModalRef<CreateGuildModalComponent>,
    private storageService: StorageService,
    private api: ApiService,
    private guildService: GuildService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
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
  }

  saveGuild(): void {
    const data = {
      rank: this.guild.rank,
      totalPlayers: this.guild.totalPlayers,
      raidsPerWeek: this.guild.raidsPerWeek,
      guildName: this.guild.guildName,
      realm: this.guild.realm,
      activities: this.guild.activities,
      guildEmblem: this.guild.guildEmblem,
      wowLogLink: this.guild.wowLogLink,
      slogan: this.guild.slogan,
      objectives: this.guild.objectives,
      recruiting: this.guild.recruiting,
      lootSystems: this.guild.lootSystems,
    };

    this.guildService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newGuild(): void {
    this.submitted = false;
    this.guild = {
      rank: null,
      totalPlayers: null,
      raidsPerWeek: null,
      guildName: '',
      realm: '',
      activities: '',
      guildEmblem: '',
      wowLogLink: '',
      slogan: '',
      objectives: '',
      recruiting: false,
      lootSystems: '',
    };
  }

}
