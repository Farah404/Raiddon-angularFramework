import { Component, OnInit, Input} from '@angular/core';
import { Raid } from 'src/model/raids';
import { RaidsService } from '../_services/raids.service';
import { ActivatedRoute } from '@angular/router';
import { RaidRequirement, Equipment, Guild, GuildRecruitment, PlayableCharacter, Preferences, User } from 'src/model/raids';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ApplyToRaidModalComponent } from '../apply-to-raid-modal/apply-to-raid-modal.component';

@Component({
  selector: 'app-raid-details',
  templateUrl: './raid-details.component.html',
  styleUrls: ['./raid-details.component.scss']
})
export class RaidDetailsComponent implements OnInit {
raids? : Raid[];
currentUser: any;
modalRef: MdbModalRef<ApplyToRaidModalComponent> | null = null;
users?: User[];

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

  constructor(private route: ActivatedRoute, 
    private raidService: RaidsService,
    private userService: UserService,
    private modalService: MdbModalService,
    private storageService: StorageService) { }

    openModal() {
      this.modalRef = this.modalService.open(ApplyToRaidModalComponent)
      this.id = this.raidService.id;
      this.getRaid(this.id)
    }

  ngOnInit(): void {
    this.id = this.raidService.id;
    this.getRaid(this.id)
    this.currentUser = this.storageService.getUser();
    this.retrieveUsers();
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

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (e) => console.error(e)
      });
  }

}
