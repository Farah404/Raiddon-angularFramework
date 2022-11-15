import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { About } from './about.component'

const routes = [
  {
    path: '',
    component: About,
  },
]

@NgModule({
  declarations: [About],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [About],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutModule {}
