import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-troll-modal',
  templateUrl: './troll-modal.component.html',
  styleUrls: ['./troll-modal.component.scss']
})
export class TrollModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<TrollModalComponent>) {}

  ngOnInit(): void {
  }

}
