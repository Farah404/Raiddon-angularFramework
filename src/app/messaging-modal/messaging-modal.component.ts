import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-messaging-modal',
  templateUrl: './messaging-modal.component.html',
  styleUrls: ['./messaging-modal.component.scss']
})
export class MessagingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<MessagingModalComponent>) { }

  ngOnInit(): void {
  }

}
