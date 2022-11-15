import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { GameData } from './game-data.component'

const routes = [
  {
    path: '',
    component: GameData,
  },
]

@NgModule({
  declarations: [GameData],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [GameData],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameDataModule {}
