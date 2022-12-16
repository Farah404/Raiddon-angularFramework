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

}
