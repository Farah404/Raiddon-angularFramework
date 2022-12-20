import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-enchanting-modal',
  templateUrl: './enchanting-modal.component.html',
  styleUrls: ['./enchanting-modal.component.scss']
})
export class EnchantingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<EnchantingModalComponent>) { }

  ngOnInit(): void {
  }

}
