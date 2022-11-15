import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Contact - Raiddon',
      },
    ])
  }
}
