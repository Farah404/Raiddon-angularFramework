import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-raids',
  templateUrl: 'raids.component.html',
  styleUrls: ['raids.component.css'],
})
export class Raids {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Raids - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Raids - Raiddon',
      },
    ])
  }
}
