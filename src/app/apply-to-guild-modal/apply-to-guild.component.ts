import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { StorageService } from '../_services/storage.service';
import { GuildApplication } from 'src/model/guildapplication';
import { GuildApplicationService } from '../_services/guild-application.service';
import { ActivatedRoute } from '@angular/router';
import { Guild, GuildRecruitment } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';
import { UserService } from '../_services/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-apply-to-guild',
  templateUrl: './apply-to-guild.component.html',
  styleUrls: ['./apply-to-guild.component.scss']
})

export class ApplyToGuildComponent implements OnInit {
  id: number = this.route.snapshot.params.id
  submitted = false;
  currentUser: any;
  connectedUser: User = {}
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
  };
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
  guildApplication: GuildApplication = {
    id:null,
    selectedGuild: this.guild,
    connectedUser: this.storageService.getUser(),
  }

  constructor(public modalRef: MdbModalRef<ApplyToGuildComponent>,
    private storageService: StorageService, private guildService: GuildService,
    private guildApplicationService: GuildApplicationService,
    private route: ActivatedRoute,
    private userService : UserService) {}

  ngOnInit(): void {
    this.id = this.guildService.id;
    this.getUser();
    this.guildService.get(this.id)
      .subscribe({
        next: (data) => {
          this.guild = data;
        },
        error: (e) => console.error(e)
      });
    this.currentUser = this.storageService.getUser();
  }

  getGuild(id: number): void {
    this.guildService.get(id)
      .subscribe({
        next: (data) => {
          this.guild = data;
        },
        error: (e) => console.error(e)
      });
  }

  async getUser(): Promise<any> {
    this.connectedUser = await this.userService.getUser(this.storageService.getUser().id)
      .toPromise();
  }

  async applyToGuild(): Promise<any> {
    this.id = this.guildService.id;
    this.guild = await this.guildService.get(this.id).toPromise();
      this.currentUser = this.storageService.getUser();
      
    const data = {
      id: null,
      connectedUser: this.connectedUser,
      selectedGuild: this.guild,
    }

    this.guildApplicationService.create(data)
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
    this.guildApplication = {
      connectedUser: this.currentUser,
      selectedGuild: this.guild,
    }
  }


}
