import { Component, Input } from '@angular/core'

@Component({
  selector: 'outline-button',
  templateUrl: 'outline-button.component.html',
  styleUrls: ['outline-button.component.css'],
})
export class OutlineButton {
  @Input()
  button1: string = 'Button'

  constructor() {}
}
