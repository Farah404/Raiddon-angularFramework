import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayableCharacter, User } from 'src/model/user';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { CharacterService } from '../_services/character.service';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-update-playable-character-modal',
  templateUrl: './update-playable-character-modal.component.html',
  styleUrls: ['./update-playable-character-modal.component.scss']
})
export class UpdatePlayableCharacterModalComponent implements OnInit {
  playableRacesData = null;
  playableClassesData = null;
  classTalentsData = null;
  professionsData = null;
  connectedRealmsData = null;
  reputationFactionsData = null;

  @Input() viewMode = false;

  @Input() currentPlayableCharacter: PlayableCharacter = {
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
  };

  @Input() currentUser: User = {
    username: '',
    email: '',
    password: '',
    battleTag: '',
    profilePicture: ''
  };

  message = '';
  id: number = this.route.snapshot.params.id;
  constructor(
    public modalRef: MdbModalRef<UpdatePlayableCharacterModalComponent>,
    private route: ActivatedRoute,
    private userService: UserService,
    private storageService: StorageService,
    private characterService: CharacterService,
    private api: ApiService,) { }
    

  ngOnInit(): void {
    this.id = this.characterService.id;
    this.currentUser = this.storageService.getUser();
    if (!this.viewMode) {
      this.message = '';
      this.getPlayableCharacter(this.id);
    }

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

  getPlayableCharacter(id: number): void {
    this.characterService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPlayableCharacter = this.currentUser.playableCharacter;
        },
        error: (e) => console.error(e)
      });
  }

  updatePlayableCharacter(): void {
    this.message = '';
    this.characterService.updateCharacterDTO(this.currentPlayableCharacter)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.modalRef.close()
          this.message = res.message ? res.message : 'Your details were updated successfully!';
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }


}
