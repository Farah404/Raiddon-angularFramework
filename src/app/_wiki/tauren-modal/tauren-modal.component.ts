import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-tauren-modal',
  templateUrl: './tauren-modal.component.html',
  styleUrls: ['./tauren-modal.component.scss']
})
export class TaurenModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<TaurenModalComponent>) {}

  ngOnInit(): void {
  }

}
