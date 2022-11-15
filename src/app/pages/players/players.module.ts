import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Players } from './players.component'

const routes = [
  {
    path: '',
    component: Players,
  },
]

@NgModule({
  declarations: [Players],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Players],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlayersModule {}
