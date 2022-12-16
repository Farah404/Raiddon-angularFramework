import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-night-elf-modal',
  templateUrl: './night-elf-modal.component.html',
  styleUrls: ['./night-elf-modal.component.scss']
})
export class NightElfModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<NightElfModalComponent>) {}

  ngOnInit(): void {
  }

}
