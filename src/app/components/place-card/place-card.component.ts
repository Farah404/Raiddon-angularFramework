import { Component, Input } from '@angular/core'

@Component({
  selector: 'place-card',
  templateUrl: 'place-card.component.html',
  styleUrls: ['place-card.component.css'],
})
export class PlaceCard {
  @Input()
  image: string =
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000'
  @Input()
  image_alt: string = 'image'
  @Input()
  city: string = 'City Name'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'

  constructor() {}
}
