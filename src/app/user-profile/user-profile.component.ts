import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CreacteCharacterModalComponent } from '../creacte-character-modal/creacte-character-modal.component';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';
import { UpdateProfileModalComponent } from '../update-profile-modal/update-profile-modal.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  modalRef: MdbModalRef<CreacteCharacterModalComponent> | null = null;
  playersRankingsData=null;

  constructor(
    private storageService: StorageService, 
    private modalService: MdbModalService,
    private api:ApiService) { }

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
    this.currentUser = this.storageService.getUser();
    this.api.getPlayersRankings().subscribe((data) => {
      this.playersRankingsData = data;
    })
  }

}
