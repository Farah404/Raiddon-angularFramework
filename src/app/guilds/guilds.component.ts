import { Component, OnInit } from '@angular/core';
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent implements OnInit {

  guilds?: Guild[];
  filteredGuilds: Guild[]
  currentGuild: Guild = {};
  currentIndex = -1;
  guildName='';

  constructor(private guildService: GuildService) { }

  ngOnInit(): void {
    this.retrieveGuilds();

    
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

  searchGuildName(): void {
    this.currentGuild = {};
    this.currentIndex = -1;

    this.guildService.findByGuildName(this.guildName)
      .subscribe({
        next: (data) => {
          this.guilds = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
