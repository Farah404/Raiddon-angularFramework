import { Component, OnInit } from '@angular/core';

import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-contact-player-modal',
  templateUrl: './contact-player-modal.component.html',
  styleUrls: ['./contact-player-modal.component.scss']
})
export class ContactPlayerModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ContactPlayerModalComponent>) {}

  ngOnInit(): void {
  }

}
