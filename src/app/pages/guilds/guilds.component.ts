import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-guilds',
  templateUrl: 'guilds.component.html',
  styleUrls: ['guilds.component.css'],
})
export class Guilds {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Guilds - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Guilds - Raiddon',
      },
    ])
  }
}
