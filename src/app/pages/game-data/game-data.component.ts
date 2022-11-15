import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'game-data',
  templateUrl: 'game-data.component.html',
  styleUrls: ['game-data.component.css'],
})
export class GameData {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('GameData - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'GameData - Raiddon',
      },
    ])
  }
}
