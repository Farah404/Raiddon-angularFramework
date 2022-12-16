import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-gnome-modal',
  templateUrl: './gnome-modal.component.html',
  styleUrls: ['./gnome-modal.component.scss']
})
export class GnomeModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<GnomeModalComponent>) {}

  ngOnInit(): void {
  }

}
