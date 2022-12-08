import { Component, Input, OnInit } from '@angular/core';
import { ApplyToGuildComponent } from '../apply-to-guild-modal/apply-to-guild.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from 'src/model/user';
import { StorageService } from '../_services/storage.service';
import { GuildRecruitment } from 'src/model/guild';

@Component({
  selector: 'app-guild-details',
  templateUrl: './guild-details.component.html',
  styleUrls: ['./guild-details.component.scss']
})

export class GuildDetailsComponent implements OnInit {
  currentUser: any;
  guilds?: Guild[];
  modalRef: MdbModalRef<ApplyToGuildComponent> | null = null;
  users?: User[];
  filteredGuildMembers: User[];


  @Input() currentGuildRecruitment: GuildRecruitment = {
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
  @Input() currentGuild: Guild = {
    rank: null,
    totalPlayers: null,
    raidsPerWeek: null,
    guildName: null,
    realm: '',
    activities: '',
    guildEmblem: '',
    wowLogLink: '',
    slogan: '',
    objectives: '',
    recruiting: false,
    lootSystems: '',
    guildMaster:'',
    guildRecruitment:this.currentGuildRecruitment,
  };

  id: number = this.route.snapshot.params.id

  message = '';

  constructor(private storageService: StorageService,
    private modalService: MdbModalService,
    private route: ActivatedRoute,
    private guildService: GuildService,
    private userService: UserService) { }

  openModal() {
    this.modalRef = this.modalService.open(ApplyToGuildComponent)
  }
  ngOnInit(): void {
    this.id = this.guildService.id;
    this.getGuild(this.id)
    this.currentUser = this.storageService.getUser();
    this.retrieveUsers();
  }

  getGuild(id: number): void {
    this.guildService.get(id)
      .subscribe({
        next: (data) => {
          this.currentGuild = data;
        },
        error: (e) => console.error(e)
      });
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          this.filteredGuildMembers = this.users.filter(f => f.playableCharacter.guild.guildName == this.currentGuild.guildName);
        },
        error: (e) => console.error(e)
      });
  }

}
