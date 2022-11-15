import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SolidButton } from './solid-button/solid-button.component'
import { OutlineButton } from './outline-button/outline-button.component'
import { PlaceCard } from './place-card/place-card.component'

@NgModule({
  declarations: [SolidButton, OutlineButton, PlaceCard],
  imports: [CommonModule, RouterModule],
  exports: [SolidButton, OutlineButton, PlaceCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
