import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-equipment-modal',
  templateUrl: './equipment-modal.component.html',
  styleUrls: ['./equipment-modal.component.scss']
})
export class EquipmentModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<EquipmentModalComponent>) { }

  ngOnInit(): void {
  }

}
