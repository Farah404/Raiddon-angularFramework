import { Component, OnInit, Input} from '@angular/core';
import { Raid } from 'src/model/raids';
import { RaidsService } from '../_services/raids.service';
import { ActivatedRoute } from '@angular/router';
import { RaidRequirement, Equipment, Guild, GuildRecruitment, PlayableCharacter, Preferences, User } from 'src/model/raids';

@Component({
  selector: 'app-raid-details',
  templateUrl: './raid-details.component.html',
  styleUrls: ['./raid-details.component.scss']
})
export class RaidDetailsComponent implements OnInit {
raids? : Raid[];

@Input() selectedGuildRecruitment: GuildRecruitment ={
  minIlevel: null,
  minLevel: null,
  playableCharacter: '',
  quantity: '',
  bulk: '',
  description: '',
  mainSpec: '',
  secondarySpec: '',
  mainRole: '',
  secondaryRole: '',
  firstProfession: '',
  secondProfession: '',
  canCook: false,
  canFish: false,
  canFirstAid: false,
}

@Input() selectedPreferences: Preferences ={
  raidsPerWeek: null,
  seekingGuild: false,
  seekingRaid: false,
  description: '',
  objectives: '',
  lootSystems: '',

}

@Input() selectedGuild: Guild ={
  rank: null,
  totalPlayers: null,
  raidsPerWeek: null,
  guildName: null,
  realm: '',
  activities: '',
  guildEmblem: '',
  wowLogLink: '',
  slogan: '',
  objectives: '',
  recruiting: false,
  lootSystems: '',
  guildMaster:'',
  guildRecruitment:this.selectedGuildRecruitment,
}

@Input() selectedEqiupment: Equipment ={
  headItem: '',
  shoulderItem: '',
  backItem: '',
  chestItem: '',
  wristItem: '',
  handItem: '',
  waistItem: '',
  legsItem: '',
  feetItem: '',
  neckItem: '',
  firstRingItem: '',
  secondRingItem: '',
  firstTrinketItem: '',
  secondTrinketItem: '',
  mainHandItem: '',
  offHandItem: '',
  relicItem: '',
}

@Input() selectedPlayableCharacter: PlayableCharacter ={
  ilevel: null,
  level: null,
  name:'',
  wowLogLink:'',
  realm:'',
  faction:'',
  race:'',
  playableClass:'',
  mainSpec:'',
  secondarySpec:'',
  mainRole:'',
  secondaryRole:'',
  firstProfession:'',
  secondProfession:'',
  hasGuild:false,
  canCook: false,
  canFish: false,
  canFirstAid: false,
  guildRank: '',
  preferences:this.selectedPreferences,
  equipment: this.selectedEqiupment,
  guild: this.selectedGuild,
}

@Input() selectedUser: User ={
  username:'',
  email:'',
  battleTag:'',
  profilePicture:'',
  guildRank:'',
  playableCharacter:this.selectedPlayableCharacter
}

@Input() selectedRaidRequirement: RaidRequirement = {
  mainClass:'',
    mainSpec:'',
    secondarySpec:'',
    mainRole:'',
    secondaryRole:'',
}

@Input() selectedRaid: Raid = {
  raidIcon:'',
  raidName:'',
  raidZone:'',
  raidTotalEncounters:'',
  raidDate:'',
  raidPullTime:'',
  raidOffTime:'',
  raidDifficulty:'',
  raidLootSystem:'',
  raidRequirements:this.selectedRaidRequirement,
  raidLeader: this.selectedUser,
}

id: number = this.route.snapshot.params.id

  constructor(private route: ActivatedRoute, private raidService: RaidsService) { }

  ngOnInit(): void {
    this.id = this.raidService.id;
    this.getRaid(this.id)
  }

  getRaid(id: number): void {
    this.raidService.get(id)
      .subscribe({
        next: (data) => {
          this.selectedRaid = data;
        },
        error: (e) => console.error(e)
      });
  }

}
