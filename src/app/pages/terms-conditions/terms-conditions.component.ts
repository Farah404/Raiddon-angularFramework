import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'terms-conditions',
  templateUrl: 'terms-conditions.component.html',
  styleUrls: ['terms-conditions.component.css'],
})
export class TermsConditions {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('TermsConditions - Raiddon')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'TermsConditions - Raiddon',
      },
    ])
  }
}
