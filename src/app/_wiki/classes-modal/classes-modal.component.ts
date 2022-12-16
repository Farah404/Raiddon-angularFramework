import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-classes-modal',
  templateUrl: './classes-modal.component.html',
  styleUrls: ['./classes-modal.component.scss']
})
export class ClassesModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ClassesModalComponent>) {}


  ngOnInit(): void {
  }

}
