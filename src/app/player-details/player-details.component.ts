import { Component, OnInit, Input } from '@angular/core';
import { ContactPlayerModalComponent } from '../contact-player-modal/contact-player-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Equipment, Guild, GuildRecruitment, PlayableCharacter, Preferences, User } from 'src/model/user';
import { ApiService } from '../_services/api.service';


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})

export class PlayerDetailsComponent implements OnInit {

  modalRef: MdbModalRef<ContactPlayerModalComponent> | null = null;
  id: number = this.route.snapshot.params.id
  playersRankingsData=null;
  filteredPlayersRankingsData=null;

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

  constructor(
    private api:ApiService,
    private route: ActivatedRoute, 
    private modalService: MdbModalService,
    private userService: UserService) { }

  openContactModal() {
    this.modalRef = this.modalService.open(ContactPlayerModalComponent);
    this.id = this.userService.id;
    this.getUser(this.id);
  }

  ngOnInit(): void {
    this.id = this.userService.id;
    this.getUser(this.id);
    this.api.getPlayersRankings().subscribe((data) => {
      this.playersRankingsData = data;
      this.filteredPlayersRankingsData=this.playersRankingsData.filter(f => f.characterName==this.selectedUser.playableCharacter.name);
    })
  }

  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe({
        next: (data) => {
          this.selectedUser = data;
        },
        error: (e) => console.error(e)
      });
  }

  get filteredPlayersRankingsDataRows (): number{
    return this.filteredPlayersRankingsData.length;
  }

  



}
