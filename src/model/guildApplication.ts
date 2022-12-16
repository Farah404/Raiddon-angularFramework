import { Guild } from "./guild";
import { User } from "./user";


export class GuildApplication {
    id?: any;
    connectedUser?: User;
    selectedGuild?: Guild;
}