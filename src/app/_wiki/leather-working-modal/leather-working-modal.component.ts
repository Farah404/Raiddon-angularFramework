import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-leather-working-modal',
  templateUrl: './leather-working-modal.component.html',
  styleUrls: ['./leather-working-modal.component.scss']
})
export class LeatherWorkingModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<LeatherWorkingModalComponent>) { }

  ngOnInit(): void {
  }

}
