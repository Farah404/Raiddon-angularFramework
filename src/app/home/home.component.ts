import { Component, OnInit } from '@angular/core';
import { Guild } from 'src/model/guild';
import { GuildService } from '../_services/guild.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  guilds?: Guild[];
  firstRankGuild: Guild[];
  secondRankGuild: Guild[];
  thirdRankGuild: Guild[];
  fourthRankGuild: Guild[];
  currentGuild: Guild = {};
  currentIndex = -1;
  guildName = '';
  constructor(
    private guildService: GuildService,
  ) { }

  ngOnInit(): void {
    this.getFirstRankGuild();
  }

  getFirstRankGuild(): void {
    this.guildService.getAll()
      .subscribe({
        next: (data) => {
          this.guilds = data;
          this.firstRankGuild = this.guilds.filter(f => f.rank == 1);
          this.secondRankGuild = this.guilds.filter(f => f.rank == 57);
          this.thirdRankGuild = this.guilds.filter(f => f.rank == 2);
          this.fourthRankGuild = this.guilds.filter(f => f.rank == 9);
        },
        error: (e) => console.error(e)
      });
  }

  setSelectedGuild(guild: Guild): void {
    this.guildService.id = guild.id;
  }

}
