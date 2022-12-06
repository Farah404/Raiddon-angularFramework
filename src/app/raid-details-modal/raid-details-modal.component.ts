import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Raid } from 'src/model/raids';
import { StorageService } from '../_services/storage.service';
import { RaidsService } from '../_services/raids.service';

@Component({
  selector: 'app-raid-details-modal',
  templateUrl: './raid-details-modal.component.html',
  styleUrls: ['./raid-details-modal.component.scss']
})
export class RaidDetailsModalComponent implements OnInit {
  currentUser: any;
  raids?: Raid [];
  currentRaid: Raid [];
  currentIndex = -1;
  raidName='';

  constructor(private raidService: RaidsService, private storageService: StorageService,public modalRef: MdbModalRef<RaidDetailsModalComponent>) { }

  ngOnInit(): void {
    this.retrieveRaids();
  }

  retrieveRaids(): void {
    this.raidService.getAll()
      .subscribe({
        next: (data) => {
          this.currentUser = this.storageService.getUser();
          this.raids = data;
        },
        error: (e) => console.error(e)
      });
  }

}
