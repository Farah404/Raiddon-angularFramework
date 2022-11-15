import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Raids } from './raids.component'

const routes = [
  {
    path: '',
    component: Raids,
  },
]

@NgModule({
  declarations: [Raids],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Raids],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RaidsModule {}
