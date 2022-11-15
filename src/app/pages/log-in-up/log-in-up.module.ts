import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LogInUp } from './log-in-up.component'

const routes = [
  {
    path: '',
    component: LogInUp,
  },
]

@NgModule({
  declarations: [LogInUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LogInUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LogInUpModule {}
