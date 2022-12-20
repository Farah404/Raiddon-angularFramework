import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-tailoringg-modal',
  templateUrl: './tailoringg-modal.component.html',
  styleUrls: ['./tailoringg-modal.component.scss']
})
export class TailoringgModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<TailoringgModalComponent>) { }

  ngOnInit(): void {
  }

}
