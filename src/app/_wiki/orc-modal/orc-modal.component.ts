import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-orc-modal',
  templateUrl: './orc-modal.component.html',
  styleUrls: ['./orc-modal.component.scss']
})
export class OrcModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<OrcModalComponent>) {}
  ngOnInit(): void {
  }

}
