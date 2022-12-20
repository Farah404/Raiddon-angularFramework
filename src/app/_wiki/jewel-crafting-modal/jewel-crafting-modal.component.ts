import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-jewel-crafting-modal',
  templateUrl: './jewel-crafting-modal.component.html',
  styleUrls: ['./jewel-crafting-modal.component.scss']
})
export class JewelCraftingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<JewelCraftingModalComponent>) { }

  ngOnInit(): void {
  }

}
