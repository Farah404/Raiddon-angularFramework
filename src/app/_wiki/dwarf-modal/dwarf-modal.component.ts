import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-dwarf-modal',
  templateUrl: './dwarf-modal.component.html',
  styleUrls: ['./dwarf-modal.component.scss']
})
export class DwarfModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<DwarfModalComponent>) {}

  ngOnInit(): void {
  }

}
