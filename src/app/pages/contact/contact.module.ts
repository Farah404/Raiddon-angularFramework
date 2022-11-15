import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Contact } from './contact.component'

const routes = [
  {
    path: '',
    component: Contact,
  },
]

@NgModule({
  declarations: [Contact],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Contact],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactModule {}
