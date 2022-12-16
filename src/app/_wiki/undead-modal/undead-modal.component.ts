import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-undead-modal',
  templateUrl: './undead-modal.component.html',
  styleUrls: ['./undead-modal.component.scss']
})
export class UndeadModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<UndeadModalComponent>) {}

  ngOnInit(): void {
  }

}
