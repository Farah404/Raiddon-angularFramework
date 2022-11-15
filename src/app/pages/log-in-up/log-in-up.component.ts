import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'log-in-up',
  templateUrl: 'log-in-up.component.html',
  styleUrls: ['log-in-up.component.css'],
})
export class LogInUp {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('LogInUp - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'LogInUp - Raiddon',
      },
    ])
  }
}
