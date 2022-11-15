import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-players',
  templateUrl: 'players.component.html',
  styleUrls: ['players.component.css'],
})
export class Players {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Players - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Players - Raiddon',
      },
    ])
  }
}
