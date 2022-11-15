import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { FAQ } from './f-a-q.component'

const routes = [
  {
    path: '',
    component: FAQ,
  },
]

@NgModule({
  declarations: [FAQ],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [FAQ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FAQModule {}
