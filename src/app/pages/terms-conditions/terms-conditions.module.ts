import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { TermsConditions } from './terms-conditions.component'

const routes = [
  {
    path: '',
    component: TermsConditions,
  },
]

@NgModule({
  declarations: [TermsConditions],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [TermsConditions],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TermsConditionsModule {}
