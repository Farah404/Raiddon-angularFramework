export class Playablecharacter {
    public characterName: string;
    public ilevel: number;
    public hasGuild: boolean;
    public canCook: boolean;
    public canFish: boolean;
    public canFirstAid: boolean;
    public wowLogLink: string;
    public faction: string;
    public race: string;
    public class: string;
    public mainSpecialisation: string;
    public secondarySpecialisation: string;
    public firstProfession: string;
    public firstProfessionSpecialisation: string;
    public secondProfession: string;
    public secondProfessionSpecialisation: string;
    public guildRank: string;
    public guild: number;
    public equipment: number;
    public reputation: string[];

    constructor() {
        this.characterName = '';
        this.ilevel = null;
        this.hasGuild = false;
        this.canCook = false;
        this.canFish = false;
        this.canFirstAid = false;
        this.wowLogLink = '';
        this.faction = '';
        this.race = '';
        this.class = '';
        this.mainSpecialisation = '';
        this.secondarySpecialisation = '';
        this.firstProfession='';
        this.firstProfessionSpecialisation='';
        this.secondProfession='';
        this.secondProfessionSpecialisation='';
        this.guildRank = '';
        this.guild=null;
        this.equipment=null;
        this.reputation=null;
      }
}