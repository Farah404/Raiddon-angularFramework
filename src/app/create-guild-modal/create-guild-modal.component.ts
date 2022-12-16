import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../_services/api.service';
import { StorageService } from '../_services/storage.service'
import { Guild, GuildRecruitment } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';
import { GuildRecruitmentService } from '../_services/guild-recruitment.service';
import { UserService } from '../_services/user.service';

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

  guildRecruitment: GuildRecruitment = {
    id:null,
    minIlevel: null,
    minLevel: null,
    playableCharacter: '',
    quantity: '',
    bulk: '',
    description: '',
    mainSpec: '',
    secondarySpec: '',
    mainRole: '',
    secondaryRole: '',
    firstProfession: '',
    secondProfession: '',
    canCook: false,
    canFish: false,
    canFirstAid: false,
  }

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
    guildMaster: '',
    guildRecruitmentId: this.guildRecruitment.id,
  };
  submitted = false;

  constructor(public modalRef: MdbModalRef<CreateGuildModalComponent>,
    private storageService: StorageService,
    private api: ApiService,
    private guildService: GuildService,
    private guildRecruitmentService: GuildRecruitmentService,
    private userService: UserService) { }

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

  saveGuildRecruitment(): void {
    const data = {
      id:null,
      minIlevel: this.guildRecruitment.minIlevel,
      minLevel: this.guildRecruitment.minLevel,
      playableCharacter: this.guildRecruitment.playableCharacter,
      quantity: this.guildRecruitment.quantity,
      bulk: this.guildRecruitment.bulk,
      description: this.guildRecruitment.description,
      mainSpec: this.guildRecruitment.mainSpec,
      secondarySpec: this.guildRecruitment.secondarySpec,
      mainRole: this.guildRecruitment.mainRole,
      secondaryRole: this.guildRecruitment.secondaryRole,
      firstProfession: this.guildRecruitment.firstProfession,
      secondProfession: this.guildRecruitment.secondProfession,
      canCook: this.guildRecruitment.canCook,
      canFish: this.guildRecruitment.canFish,
      canFirstAid: this.guildRecruitment.canFirstAid,
    };

    this.guildRecruitmentService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
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
      guildMaster: this.guild.guildMaster,
      guildRecruitmentId: this.guildRecruitment.id,
    };

    this.guildService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.modalRef.close()
        },
        error: (e) => console.error(e)
      });
  }

  newGuild(): void {
    this.submitted = false;
    this.guildRecruitment = {
      minIlevel: null,
      minLevel: null,
      playableCharacter: '',
      quantity: '',
      bulk: '',
      description: '',
      mainSpec: '',
      secondarySpec: '',
      mainRole: '',
      secondaryRole: '',
      firstProfession: '',
      secondProfession: '',
      canCook: false,
      canFish: false,
      canFirstAid: false,
    }
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
      guildMaster: '',
      guildRecruitmentId: this.guildRecruitment.id,
    };
  }
}
