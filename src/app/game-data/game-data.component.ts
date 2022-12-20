import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { BloodElfModalComponent } from '../_wiki/blood-elf-modal/blood-elf-modal.component';
import { DraeneiModalComponent } from '../_wiki/draenei-modal/draenei-modal.component';
import { DwarfModalComponent } from '../_wiki/dwarf-modal/dwarf-modal.component';
import { GnomeModalComponent } from '../_wiki/gnome-modal/gnome-modal.component';
import { HumanModalComponent } from '../_wiki/human-modal/human-modal.component';
import { NightElfModalComponent } from '../_wiki/night-elf-modal/night-elf-modal.component';
import { OrcModalComponent } from '../_wiki/orc-modal/orc-modal.component';
import { TaurenModalComponent } from '../_wiki/tauren-modal/tauren-modal.component';
import { TrollModalComponent } from '../_wiki/troll-modal/troll-modal.component';
import { UndeadModalComponent } from '../_wiki/undead-modal/undead-modal.component';
import { ClassesModalComponent } from '../_wiki/classes-modal/classes-modal.component';
import { TalentsModalComponent } from '../_wiki/talents-modal/talents-modal.component';
import { AlchemyModalComponent } from '../_wiki/alchemy-modal/alchemy-modal.component';
import { BlacksmithingModalComponent } from '../_wiki/blacksmithing-modal/blacksmithing-modal.component';
import { CookingModalComponent } from '../_wiki/cooking-modal/cooking-modal.component';
import { EnchantingModalComponent } from '../_wiki/enchanting-modal/enchanting-modal.component';
import { EngineeringModalComponent } from '../_wiki/engineering-modal/engineering-modal.component';
import { FishingModalComponent } from '../_wiki/fishing-modal/fishing-modal.component';
import { HerbalismModalComponent } from '../_wiki/herbalism-modal/herbalism-modal.component';
import { InscriptionModalComponent } from '../_wiki/inscription-modal/inscription-modal.component';
import { JewelCraftingModalComponent } from '../_wiki/jewel-crafting-modal/jewel-crafting-modal.component';
import { LeatherWorkingModalComponent } from '../_wiki/leather-working-modal/leather-working-modal.component';
import { MiningModalComponent } from '../_wiki/mining-modal/mining-modal.component';
import { SkinningModalComponent } from '../_wiki/skinning-modal/skinning-modal.component';
import { TailoringgModalComponent } from '../_wiki/tailoringg-modal/tailoringg-modal.component';



@Component({
  selector: 'app-game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.scss']
})
export class GameDataComponent implements OnInit {
  playableRacesData = null;
  playableClassesData = null;
  classTalentsData = null;
  professionsData = null;
  connectedRealmsData = null;
  reputationFactionsData = null;
  racePicturesData = null;
  modalRef: MdbModalRef<BloodElfModalComponent> | null = null;
  constructor(private api: ApiService, private modalService: MdbModalService,) { }

  ngOnInit() {

    this.api.getPlayableRaces().subscribe((data) => {
      this.playableRacesData = data;
    })

    this.api.getPlayableClasses().subscribe((data) => {
      this.playableClassesData = data;
    })

    this.api.getClassTalents().subscribe((data) => {
      this.classTalentsData = data;
    })

    this.api.getProfessions().subscribe((data) => {
      this.professionsData = data;
    })

    this.api.getRealms().subscribe((data) => {
      this.connectedRealmsData = data;
    })

    this.api.getReputationFactions().subscribe((data) => {
      this.reputationFactionsData = data;
    })

  }

  openBloodElfModal() {
    this.modalRef = this.modalService.open(BloodElfModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openDraeneiModal() {
    this.modalRef = this.modalService.open(DraeneiModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openDwarfModal() {
    this.modalRef = this.modalService.open(DwarfModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openGnomeModal() {
    this.modalRef = this.modalService.open(GnomeModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openHumanModal() {
    this.modalRef = this.modalService.open(HumanModalComponent, {
      modalClass: 'modal-xl'
    })
  }


  openNightElfModal() {
    this.modalRef = this.modalService.open(NightElfModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openOrcModal() {
    this.modalRef = this.modalService.open(OrcModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openTaurenModal() {
    this.modalRef = this.modalService.open(TaurenModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openTrollModal() {
    this.modalRef = this.modalService.open(TrollModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openUndeadModal() {
    this.modalRef = this.modalService.open(UndeadModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openClassesModal() {
    this.modalRef = this.modalService.open(ClassesModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openTalentsModal() {
    this.modalRef = this.modalService.open(TalentsModalComponent, {
      modalClass: 'modal-xl'
    })
  }

  openAlchemyModal() {
    this.modalRef = this.modalService.open(AlchemyModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openBlacksmithingModal() {
    this.modalRef = this.modalService.open(BlacksmithingModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openCookingModal() {
    this.modalRef = this.modalService.open(CookingModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openEnchantingModal() {
    this.modalRef = this.modalService.open(EnchantingModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openEngineeringModal() {
    this.modalRef = this.modalService.open(EngineeringModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openFishingModal() {
    this.modalRef = this.modalService.open(FishingModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openHerbalismModal() {
    this.modalRef = this.modalService.open(HerbalismModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openInscriptionModal() {
    this.modalRef = this.modalService.open(InscriptionModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openJewelCraftingModal() {
    this.modalRef = this.modalService.open(JewelCraftingModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openLeatherWorkingModal() {
    this.modalRef = this.modalService.open(LeatherWorkingModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openMiningModal() {
    this.modalRef = this.modalService.open(MiningModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openSkiningModal() {
    this.modalRef = this.modalService.open(SkinningModalComponent, {
      modalClass: 'modal-gl'
    })
  }

  openTailoringModal() {
    this.modalRef = this.modalService.open(TailoringgModalComponent, {
      modalClass: 'modal-gl'
    })
  }

}
