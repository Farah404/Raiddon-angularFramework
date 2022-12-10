import { Component, OnInit,Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/model/user';
import { StorageService } from '../_services/storage.service';
import { PreferencesService } from '../_services/preferences.service';
import { Preferences } from 'src/model/user';

@Component({
  selector: 'app-preferences-modal',
  templateUrl: './preferences-modal.component.html',
  styleUrls: ['./preferences-modal.component.scss']
})
export class PreferencesModalComponent implements OnInit {
  currentUser: any;
  @Input() viewMode = false;
  @Input() currentPreferences: Preferences = {
    raidsPerWeek: null,
    seekingGuild: false,
    seekingRaid: false,
    description: '',
    objectives: '',
    lootSystems: '',
  };

  id: number = this.route.snapshot.params.id;
  message = '';

  constructor(public modalRef: MdbModalRef<PreferencesModalComponent>,
    private route: ActivatedRoute,
    private preferencesService: PreferencesService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.id = this.preferencesService.id;
    this.currentUser = this.storageService.getUser();
    if (!this.viewMode) {
      this.message = '';
      this.getPreferences(this.id);
    }
  }

  getPreferences(id: number): void {
    this.preferencesService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPreferences = this.currentUser.playableCharacter.preferences;
        },
        error: (e) => console.error(e)
      });
  }

  updatePreferences(): void {
    this.message = '';

    this.preferencesService.update(this.currentPreferences.id, this.currentPreferences)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Your details were updated successfully!';
          this.ngOnInit();
          this.modalRef.close()
        },
        error: (e) => console.error(e)
      });
  }



}
