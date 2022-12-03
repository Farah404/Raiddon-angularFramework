import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';
import { Items } from 'src/model/items';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EquipmentModalComponent } from '../equipment-modal/equipment-modal.component';


@Component({
  selector: 'app-dressing-room',
  templateUrl: './dressing-room.component.html',
  styleUrls: ['./dressing-room.component.scss']
})
export class DressingRoomComponent implements OnInit {
  items?: Items[];
  currentItem: Items = {};
  currentIndex = -1;
  itemName='';
  modalRef: MdbModalRef<EquipmentModalComponent> | null = null;

  constructor(private itemsService: ItemService,
    private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.itemsService.getAll()
      .subscribe({
        next: (data) => {
          this.items = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  searchItemName(): void {
    this.currentItem = {};
    this.currentIndex = -1;

    this.itemsService.findByItemName(this.itemName)
      .subscribe({
        next: (data) => {
          this.items = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  openEquipmentModal() {
    this.modalRef = this.modalService.open(EquipmentModalComponent)
  }

}
