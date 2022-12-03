import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CreacteCharacterModalComponent } from '../creacte-character-modal/creacte-character-modal.component';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';
import { UpdateProfileModalComponent } from '../update-profile-modal/update-profile-modal.component';
import { ApiService } from '../_services/api.service';
import { UserService } from '../_services/user.service';
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  currentCharacter: any;
  modalRef: MdbModalRef<CreacteCharacterModalComponent> | null = null;
  playersRankingsData=null;
  filteredPlayersRankingsData=null;
  guilds?: Guild[];
  filteredGuilds: Guild[]

  constructor(
    private storageService: StorageService, 
    private modalService: MdbModalService,
    private userService : UserService,
    private api:ApiService,
    private guildService: GuildService) { }

  openCharacModal() {
    this.modalRef = this.modalService.open(CreacteCharacterModalComponent)
  }

  openPrefModal() {
    this.modalRef = this.modalService.open(PreferencesModalComponent)
  }

  openUpdateModal() {
    this.modalRef = this.modalService.open(UpdateProfileModalComponent)
  }



  ngOnInit(): void {
    this.retrieveGuilds();
    this.currentUser = this.storageService.getUser();

    this.api.getPlayersRankings().subscribe((data) => {
      this.playersRankingsData = data;
      this.filteredPlayersRankingsData=this.playersRankingsData.filter(f => f.characterName==this.currentUser.playableCharacter.name);
          
    })
    this.currentCharacter = this.userService.getCharac(this.currentUser.playableCharacter.id);
    console.log(this.currentUser.playableCharacter);
  }
  
  retrieveGuilds(): void {
    this.guildService.getAll()
      .subscribe({
        next: (data) => {
          this.guilds = data;
          this.filteredGuilds = this.guilds.filter(f => f.recruiting==true);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
