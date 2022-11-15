import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Guilds } from './guilds.component'

const routes = [
  {
    path: '',
    component: Guilds,
  },
]

@NgModule({
  declarations: [Guilds],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Guilds],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GuildsModule {}
