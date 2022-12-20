import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-blacksmithing-modal',
  templateUrl: './blacksmithing-modal.component.html',
  styleUrls: ['./blacksmithing-modal.component.scss']
})
export class BlacksmithingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<BlacksmithingModalComponent>) { }

  ngOnInit(): void {
  }

}
