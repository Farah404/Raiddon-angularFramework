import { Component, OnInit } from '@angular/core';
import { RaidsService } from '../_services/raids.service';
import { Raid } from 'src/model/raids';
import { StorageService } from '../_services/storage.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CreateRaidModalComponent } from '../create-raid-modal/create-raid-modal.component';

@Component({
  selector: 'app-raids',
  templateUrl: './raids.component.html',
  styleUrls: ['./raids.component.scss']
})
export class RaidsComponent implements OnInit {
  currentUser: any;
  raids?: Raid [];
  raidName='';
  currentRaid: Raid = {};
  currentIndex = -1;
  modalRef: MdbModalRef<CreateRaidModalComponent> | null = null;

  constructor(private storageService: StorageService, private modalService: MdbModalService, private raidService: RaidsService) { }

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

  openCreateRaidModal() {
    this.modalRef = this.modalService.open(CreateRaidModalComponent)
  }

  searchRaidName(): void {
    this.currentRaid = {};
    this.currentIndex = -1;
    this.raidService.findByRaidName(this.raidName)
      .subscribe({
        next: (data) => {
          this.raids = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  setSelectedRaid(raid: Raid): void {
    this.raidService.id = raid.id;
  }
}
