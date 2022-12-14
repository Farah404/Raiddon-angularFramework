import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';
import { UpdateProfileModalComponent } from '../update-profile-modal/update-profile-modal.component';
import { ApiService } from '../_services/api.service';
import { UserService } from '../_services/user.service';
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';
import { PlayableCharacter, Preferences, Raid } from 'src/model/raids';
import { RaidsService } from '../_services/raids.service';
import { Pipe, PipeTransform } from '@angular/core'
import { PreferencesService } from '../_services/preferences.service';
import { CharacterService } from '../_services/character.service';
import { PendingApplicationsModalComponent } from '../pending-applications-modal/pending-applications-modal.component';
import { UpdatePlayableCharacterModalComponent } from '../update-playable-character-modal/update-playable-character-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  connectedUser: any;
  currentCharacter: any;
  modalRef: MdbModalRef<UpdateProfileModalComponent> | null = null;
  playersRankingsData=null;
  filteredPlayersRankingsData=null;
  guilds?: Guild[];
  filteredGuildsObjectives: Guild[];
  filteredGuildsRaidsWeek: Guild[];
  filteredGuildsClass: Guild[];
  raids?: Raid[];
  filteredRaidsSpec?: Raid[];
  filteredRaidsLootsystem?: Raid[];
  filteredRaidsClass?: Raid[];
  name = 'max pipe';

  constructor(
    private storageService: StorageService, 
    private modalService: MdbModalService,
    private userService : UserService,
    private api:ApiService,
    private guildService: GuildService,
    private raidService: RaidsService,
    private preferencesService: PreferencesService,
    private characterservice: CharacterService) { }

  openUpdateModal() {
    this.modalRef = this.modalService.open(UpdateProfileModalComponent)
  }

  openPendingModal() {
    this.modalRef = this.modalService.open(PendingApplicationsModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  retriveRaids(): void {
    this.raidService.getAll()
    .subscribe({
      next: (data) =>{
        this.raids = data;
        this.filteredRaidsLootsystem = this.raids.filter(f => f.raidLootSystem == this.connectedUser.playableCharacter.preferences.lootSystems)
        this.filteredRaidsClass = this.raids.filter(f => f.raidRequirements.mainClass == this.connectedUser.playableCharacter.playableClass)
        this.filteredRaidsSpec = this.raids.filter(f => f.raidRequirements.mainSpec == this.connectedUser.playableCharacter.mainSpec)
      }
  });
  }

  get filteredPlayersRankingsDataRows (): number{
    return this.filteredPlayersRankingsData.length;
  }

  setSelectedGuild(guild: Guild): void {
    this.guildService.id = guild.id;
  }

  setSelectedRaid(raid: Raid): void {
    this.raidService.id = raid.id;
  }

  setSelectedPreferences(preferences: Preferences): void {
    this.preferencesService.id = this.connectedUser.id;
    this.modalRef = this.modalService.open(PreferencesModalComponent)
  }

  setSelectedPlayableCharacter(playableCharacter: PlayableCharacter): void{
    this.characterservice.id = this.connectedUser.id;
    this.modalRef = this.modalService.open(UpdatePlayableCharacterModalComponent)
  }

  retrieveGuilds(): void {
    this.guildService.getAll()
      .subscribe({
        next: (data) => {
          this.guilds = data;
          this.filteredGuildsObjectives = this.guilds.filter(f => f.objectives == this.connectedUser.playableCharacter.preferences.objectives);
          this.filteredGuildsClass = this.guilds.filter(f => f.guildRecruitment.playableCharacter == this.connectedUser.playableCharacter.playableClass);
          this.filteredGuildsRaidsWeek = this.guilds.filter(f => f.raidsPerWeek == this.connectedUser.playableCharacter.preferences.raidsPerWeek);
        },
        error: (e) => console.error(e)
      });
  }

  ngOnInit(): void {
    this.retrieveGuilds();
    this.retriveRaids(); 
    this.currentUser = this.storageService.getUser();
    this.getUser();
    this.api.getPlayersRankings().subscribe((data) => {
      this.playersRankingsData = data;
      this.filteredPlayersRankingsData=this.playersRankingsData.filter(f => f.characterName==this.currentUser.playableCharacter.name);
    })
    this.currentCharacter = this.userService.getCharac(this.currentUser.playableCharacter.id);
  }

  getUser(): void {
    this.userService.getUser(this.currentUser.id)
      .subscribe({
        next: (data) => {
          this.connectedUser = data;
        },
        error: (e) => console.error(e)
      });
  }
  
}


@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(value: any[], prop: string) {
    if (!Array.isArray(value) || value.length === 0 || !prop) { 
      return value;
    }

    value.sort((a, b) => b[prop] - a[prop]);
    return value[0][prop];
  }
}
