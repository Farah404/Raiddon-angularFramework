import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-human-modal',
  templateUrl: './human-modal.component.html',
  styleUrls: ['./human-modal.component.scss']
})
export class HumanModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<HumanModalComponent>) {}

  ngOnInit(): void {
  }

}
