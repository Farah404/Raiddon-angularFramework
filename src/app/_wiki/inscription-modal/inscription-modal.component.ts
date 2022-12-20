import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-inscription-modal',
  templateUrl: './inscription-modal.component.html',
  styleUrls: ['./inscription-modal.component.scss']
})
export class InscriptionModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<InscriptionModalComponent>) { }

  ngOnInit(): void {
  }

}
