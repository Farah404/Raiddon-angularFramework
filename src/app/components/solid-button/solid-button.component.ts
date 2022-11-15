import { Component, Input } from '@angular/core'

@Component({
  selector: 'solid-button',
  templateUrl: 'solid-button.component.html',
  styleUrls: ['solid-button.component.css'],
})
export class SolidButton {
  @Input()
  button: string = 'Button'

  constructor() {}
}
