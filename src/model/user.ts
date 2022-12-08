
export class User {
    id?: any;
    username?: string;
    email?: string;
    password?: string;
    battleTag?: string;
    profilePicture?: string;
    guildRank?: String;
    playableCharacter?: PlayableCharacter;
}

export class PlayableCharacter {
    id?: any;
    ilevel?: number;
    level?: number;
    name?: string;
    wowLogLink?: string;
    realm?: string;
    faction?: string;
    race?: string;
    playableClass?: string;
    mainSpec?: string;
    secondarySpec?: string;
    mainRole?: string;
    secondaryRole?: string;
    firstProfession?: string;
    secondProfession?: string;
    hasGuild?: boolean;
    canCook?: boolean;
    canFish?: boolean;
    canFirstAid?: boolean;
    guildRank?: String;
    preferences?: Preferences;
    equipment?: Equipment;
    guild?: Guild;
}

export class Preferences {
    id?: any;
    raidsPerWeek?: number;
    seekingGuild?: boolean;
    seekingRaid?: boolean;
    description?: string;
    objectives?: string;
    lootSystems?: string;
}

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
    guildMaster?: string;
    guildRecruitment?: GuildRecruitment;
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

export class Equipment {
    id?: any;
    headItem?: string;
    shoulderItem?: string;
    backItem?: string;
    chestItem?: string;
    wristItem?: string;
    handItem?: string;
    waistItem?: string;
    legsItem?: string;
    feetItem?: string;
    neckItem?: string;
    firstRingItem?: string;
    secondRingItem?: string;
    firstTrinketItem?: string;
    secondTrinketItem?: string;
    mainHandItem?: string;
    offHandItem?: string;
    relicItem?: string;
}