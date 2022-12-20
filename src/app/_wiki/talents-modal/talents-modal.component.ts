import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-talents-modal',
  templateUrl: './talents-modal.component.html',
  styleUrls: ['./talents-modal.component.scss']
})
export class TalentsModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<TalentsModalComponent>) {}

  ngOnInit(): void {
  }

}
