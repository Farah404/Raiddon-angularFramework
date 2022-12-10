import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';
import { Items } from 'src/model/items';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { StorageService } from '../_services/storage.service';


@Component({
  selector: 'app-dressing-room',
  templateUrl: './dressing-room.component.html',
  styleUrls: ['./dressing-room.component.scss']
})
export class DressingRoomComponent implements OnInit {
  items?: Items[];
  filteredItems?:Items[];
  currentItem: Items = {};
  currentIndex = -1;
  itemName='';
  currentUser: any;
  currentCharacter: any;
  selectedHeadItem: string = '';
  selectedNecklaceItem: string = '';
  selectedShoulderItem: string = '';
  selectedCapeItem: string = '';
  selectedChestItem: string = '';
  selectedWristItem: string = '';
  selectedMainHandItem: string = '';
  selectedHandsItem: string = '';
  selectedWaistItem: string = '';
  selectedLegsItem: string = '';
  selectedFeetItem: string = '';
  selectedRingItem: string = '';
  selectedTrinketItem: string = '';
  selectedOffHandItem: string = '';

  selectedHeaditemBis?:Items[];
  selectedNecklaceitemBis?:Items[];
  selectedShoulderitemBis?:Items[];
  selectedCapeitemBis?:Items[];
  selectedChestitemBis?:Items[];
  selectedWristitemBis?:Items[];
  selectedMainHanditemBis?:Items[];
  selectedHandsitemBis?:Items[];
  selectedWaistitemBis?:Items[];
  selectedLegsitemBis?:Items[];
  selectedFeetitemBis?:Items[];
  selectedRingitemBis?:Items[];
  selectedTrinketitemBis?:Items[];
  selectedOffHanditemBis?:Items[];


  constructor(private storageService: StorageService, 
    private itemsService: ItemService,
    private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.itemsService.getAll()
      .subscribe({
        next: (data) => {
          this.items = data;
          this.filteredItems=this.items.filter(f=>f.itemPriorityClass==this.currentUser.playableCharacter.playableClass)
        },
        error: (e) => console.error(e)
      });
  }


    selectHeadChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedHeadItem = event.target.value;
      this.itemsService.findByItemName(this.selectedHeadItem)
        .subscribe({
          next: (data) => {
            this.selectedHeaditemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectNecklaceChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedNecklaceItem = event.target.value;
      this.itemsService.findByItemName(this.selectedNecklaceItem)
        .subscribe({
          next: (data) => {
            this.selectedNecklaceitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectShoulderChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedShoulderItem = event.target.value;
      this.itemsService.findByItemName(this.selectedShoulderItem)
        .subscribe({
          next: (data) => {
            this.selectedShoulderitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectCapeChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedCapeItem = event.target.value;
      this.itemsService.findByItemName(this.selectedCapeItem)
        .subscribe({
          next: (data) => {
            this.selectedCapeitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectChestChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedChestItem = event.target.value;
      this.itemsService.findByItemName(this.selectedChestItem)
        .subscribe({
          next: (data) => {
            this.selectedChestitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectWristChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedWristItem= event.target.value;
      this.itemsService.findByItemName(this.selectedWristItem)
        .subscribe({
          next: (data) => {
            this.selectedWristitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectMainHandChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedMainHandItem= event.target.value;
      this.itemsService.findByItemName(this.selectedMainHandItem)
        .subscribe({
          next: (data) => {
            this.selectedMainHanditemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectHandsChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedHandsItem= event.target.value;
      this.itemsService.findByItemName(this.selectedHandsItem)
        .subscribe({
          next: (data) => {
            this.selectedHandsitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectWaistChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedWaistItem= event.target.value;
      this.itemsService.findByItemName(this.selectedWaistItem)
        .subscribe({
          next: (data) => {
            this.selectedWaistitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectLegsChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedLegsItem= event.target.value;
      this.itemsService.findByItemName(this.selectedLegsItem)
        .subscribe({
          next: (data) => {
            this.selectedLegsitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectFeetChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedFeetItem= event.target.value;
      this.itemsService.findByItemName(this.selectedFeetItem)
        .subscribe({
          next: (data) => {
            this.selectedFeetitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectRingChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedRingItem= event.target.value;
      this.itemsService.findByItemName(this.selectedRingItem)
        .subscribe({
          next: (data) => {
            this.selectedRingitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    selectTrinketChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedTrinketItem= event.target.value;
      this.itemsService.findByItemName(this.selectedTrinketItem)
        .subscribe({
          next: (data) => {
            this.selectedTrinketitemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

    
    selectOffHandChangeHandler (event: any) {
      this.currentItem = {};
      this.currentIndex = -1;
      this.selectedOffHandItem= event.target.value;
      this.itemsService.findByItemName(this.selectedOffHandItem)
        .subscribe({
          next: (data) => {
            this.selectedOffHanditemBis = data;
          },
          error: (e) => console.error(e)
        });
    }

}
