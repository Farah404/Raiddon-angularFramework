import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-blood-elf-modal',
  templateUrl: './blood-elf-modal.component.html',
  styleUrls: ['./blood-elf-modal.component.scss']
})
export class BloodElfModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<BloodElfModalComponent>) {}


  ngOnInit(): void {
  }

}
