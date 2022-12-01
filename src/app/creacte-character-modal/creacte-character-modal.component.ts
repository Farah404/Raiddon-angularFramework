import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiService } from '../_services/api.service';
import { StorageService } from '../_services/storage.service';
import { CharacterService } from '../_services/character.service';
import { Charac } from 'src/model/character';
import { UserService } from '../_services/user.service';
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
  currentUser: any;

  character: Charac = {
    ilevel: null,
    level: null,
    name: '',
    wowLogLink: '',
    realm: '',
    faction: '',
    race: '',
    playableClass: '',
    mainSpec: '',
    secondarySpec: '',
    mainRole: '',
    secondaryRole: '',
    firstProfession: '',
    secondProfession: '',
    hasGuild: false,
    canCook: false,
    canFish: false,
    canFirstAid: false,
    guildRank: '',
    equipment: null,
    guild: null,
    user: null,
  };
  submitted = false;
  message: '';

  constructor(private characService: CharacterService,
    private userService: UserService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public modalRef: MdbModalRef<CreacteCharacterModalComponent>) { }

  saveCharacter(): void {
    const data = {
      ilevel: this.character.ilevel,
      level: this.character.level,
      name: this.character.name,
      wowLogLink: this.character.wowLogLink,
      realm: this.character.realm,
      faction: this.character.faction,
      race: this.character.race,
      playableClass: this.character.playableClass,
      mainSpec: this.character.mainSpec,
      secondarySpec: this.character.secondarySpec,
      mainRole: this.character.mainRole,
      secondaryRole: this.character.secondaryRole,
      firstProfession: this.character.firstProfession,
      secondProfession: this.character.secondProfession,
      hasGuild: this.character.hasGuild,
      canCook: this.character.canCook,
      canFish: this.character.canFish,
      canFirstAid: this.character.canFirstAid,
      guildRank: this.character.guildRank,
      equipment: this.character.equipment,
      guild: this.character.guild,
      user: this.character.user,

    };

    this.characService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });

    this.userService.update(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This User was updated successfully!';
        },
        error: (e) => console.error(e)
      });

  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      ilevel: null,
      level: null,
      name: '',
      wowLogLink: '',
      realm: '',
      faction: '',
      race: '',
      playableClass: '',
      mainSpec: '',
      secondarySpec: '',
      mainRole: '',
      secondaryRole: '',
      firstProfession: '',
      secondProfession: '',
      hasGuild: false,
      canCook: false,
      canFish: false,
      canFirstAid: false,
      guildRank: '',
      equipment: null,
      guild: null,
      user: null,
    };
  }


  ngOnInit() {
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

    this.api.getReputationFactions().subscribe((data) => {
      this.reputationFactionsData = data;
    })
  }


}
