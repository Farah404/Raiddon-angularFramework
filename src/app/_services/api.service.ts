
import { environment as env } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  bnetURL = env.raiddon_bnet_api_express_port;
  wclogURL = env.raiddon_wclog_api_express_port;

  getAreas() {
    return this.http.get(this.bnetURL + 'api/areas');
  }
  getAchievementsCategories() {
    return this.http.get(this.bnetURL + 'api/achievements');
  }

  getAchievements() {
    return this.http.get(this.bnetURL + 'api/achievementsCategories');
  }

  getArmor() {
    return this.http.get(this.bnetURL + 'api/armor');
  }

  getAuctionHouseIndex() {
    return this.http.get(this.bnetURL + 'api/auctionHouseIndex');
  }

  getAllianceAuctionHouse() {
    return this.http.get(this.bnetURL + 'api/allianceAuctionHouse');
  }

  getHordeAuctionHouse() {
    return this.http.get(this.bnetURL + 'api/hordeAuctionHouse');
  }

  getCharacterSpecialisation() {
    return this.http.get(this.bnetURL + 'api/characterSpecialisation');
  }

  getClassTalents() {
    return this.http.get(this.bnetURL + 'api/classTalents');
  }

  getConsumables() {
    return this.http.get(this.bnetURL + 'api/consumables');
  }

  getContainers() {
    return this.http.get(this.bnetURL + 'api/containers');
  }

  getCreatureFamilies() {
    return this.http.get(this.bnetURL + 'api/creatureFamilies');
  }

  getCreatureTypes() {
    return this.http.get(this.bnetURL + 'api/creatureTypes');
  }

  getItemClasses() {
    return this.http.get(this.bnetURL + 'api/itemClasses');
  }

  getMounts() {
    return this.http.get(this.bnetURL + 'api/mounts');
  }

  getPlayableClasses() {
    return this.http.get(this.bnetURL + 'api/playableClasses',);
  }

  getPlayableRaces() {
    return this.http.get(this.bnetURL + 'api/playableRaces');
  }

  getPowerTypes() {
    return this.http.get(this.bnetURL + 'api/powerTypes');
  }

  getProfessions() {
    return this.http.get(this.bnetURL + 'api/professions');
  }

  getQuestCategories() {
    return this.http.get(this.bnetURL + 'api/questCategories');
  }

  getRealms() {
    return this.http.get(this.bnetURL + 'api/realms');
  }

  getReputationFactions() {
    return this.http.get(this.bnetURL + 'api/reputationFactions');
  }

  getTitles() {
    return this.http.get(this.bnetURL + 'api/titles');
  }

  getWeapons() {
    return this.http.get(this.bnetURL + 'api/weapons');
  }

  getReports() {
    return this.http.get(this.wclogURL + 'api/reports');
  }

  getEncounters() {
    return this.http.get(this.wclogURL + 'api/encounters');
  }

  getPlayersRankings() {
    return this.http.get(this.wclogURL + 'api/playersRankings');
  }
}

