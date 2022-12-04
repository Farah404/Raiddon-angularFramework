import { Component, OnInit } from '@angular/core';
import { RaidsService } from '../_services/raids.service';
import { Raid } from 'src/model/raids';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-raids',
  templateUrl: './raids.component.html',
  styleUrls: ['./raids.component.scss']
})
export class RaidsComponent implements OnInit {
  currentUser: any;
  raids?: Raid [];
  currentRaid: Raid [];
  currentIndex = -1;
  raidName='';

  constructor(private storageService: StorageService, private raidService: RaidsService) { }

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
