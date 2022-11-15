import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'guilds',
    loadChildren: () =>
      import('./pages/guilds/guilds.module').then((m) => m.GuildsModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./pages/players/players.module').then((m) => m.PlayersModule),
  },
  {
    path: 'raids',
    loadChildren: () =>
      import('./pages/raids/raids.module').then((m) => m.RaidsModule),
  },
  {
    path: 'game-data',
    loadChildren: () =>
      import('./pages/game-data/game-data.module').then(
        (m) => m.GameDataModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'f-a-q',
    loadChildren: () =>
      import('./pages/f-a-q/f-a-q.module').then((m) => m.FAQModule),
  },
  {
    path: 'terms-conditions',
    loadChildren: () =>
      import('./pages/terms-conditions/terms-conditions.module').then(
        (m) => m.TermsConditionsModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'log-in-up',
    loadChildren: () =>
      import('./pages/log-in-up/log-in-up.module').then((m) => m.LogInUpModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
