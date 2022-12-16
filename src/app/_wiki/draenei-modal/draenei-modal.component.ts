import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-draenei-modal',
  templateUrl: './draenei-modal.component.html',
  styleUrls: ['./draenei-modal.component.scss']
})
export class DraeneiModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<DraeneiModalComponent>) {}

  ngOnInit(): void {
  }

}
