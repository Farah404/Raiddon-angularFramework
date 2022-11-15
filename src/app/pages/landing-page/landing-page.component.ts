import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  raw468j: string = ' '
  rawx9mc: string = ' '
  rawuvyi: string = ' '
  raw243v: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Raiddon',
      },
    ])
  }
}
