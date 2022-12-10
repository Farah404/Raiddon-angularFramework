import { Component, OnInit } from '@angular/core';
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';
import { StorageService } from '../_services/storage.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CreateGuildModalComponent } from '../create-guild-modal/create-guild-modal.component';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent implements OnInit {
  currentUser: any;
  guilds?: Guild[];
  filteredGuilds: Guild[];
  currentGuild: Guild = {};
  currentIndex = -1;
  guildName = '';
  modalRef: MdbModalRef<CreateGuildModalComponent> | null = null;

  constructor(
    private guildService: GuildService,
    private storageService: StorageService,
    private modalService: MdbModalService) { }

  openCreateGuildModal() {
    this.modalRef = this.modalService.open(CreateGuildModalComponent)
  }

  ngOnInit(): void {
    this.retrieveGuilds();
    this.currentUser = this.storageService.getUser();
  }

  retrieveGuilds(): void {
    this.guildService.getAll()
      .subscribe({
        next: (data) => {
          this.guilds = data;
          this.filteredGuilds = this.guilds.filter(f => f.recruiting == true);

        },
        error: (e) => console.error(e)
      });
  }

  searchGuildName(): void {
    this.currentGuild = {};
    this.currentIndex = -1;
    this.guildService.findByGuildName(this.guildName)
      .subscribe({
        next: (data) => {
          this.guilds = data;
        },
        error: (e) => console.error(e)
      });
  }

  setSelectedGuild(guild: Guild): void {
    this.guildService.id = guild.id;
  }
  
}
