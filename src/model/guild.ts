

export class Guild {
    id?: any;
    rank?: number;
    totalPlayers?: number;
    raidsPerWeek?: number;
    guildName?: string;
    realm?: string;
    activities?: string;
    guildEmblem?: string;
    wowLogLink?: string;
    slogan?: string;
    objectives?: string;
    recruiting?: boolean;
    lootSystems?: string;
    guildMaster?:string;
    guildRecruitment?:GuildRecruitment;
}

export class GuildRecruitment {
    id?: any;
    minIlevel?: number;
    minLevel?: number;
    playableCharacter?: string;
    quantity?: string;
    bulk?: string;
    description?: string;
    mainSpec?: string;
    secondarySpec?: string;
    mainRole?: string;
    secondaryRole?: string;
    firstProfession?: string;
    secondProfession?: string;
    canCook?: boolean;
    canFish?: boolean;
    canFirstAid?: boolean;
}