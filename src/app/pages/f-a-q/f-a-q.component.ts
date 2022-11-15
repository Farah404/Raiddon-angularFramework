import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'f-a-q',
  templateUrl: 'f-a-q.component.html',
  styleUrls: ['f-a-q.component.css'],
})
export class FAQ {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('FAQ - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'FAQ - Raiddon',
      },
    ])
  }
}
