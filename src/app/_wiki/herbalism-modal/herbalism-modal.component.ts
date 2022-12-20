import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-herbalism-modal',
  templateUrl: './herbalism-modal.component.html',
  styleUrls: ['./herbalism-modal.component.scss']
})
export class HerbalismModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<HerbalismModalComponent>) { }

  ngOnInit(): void {
  }

}
