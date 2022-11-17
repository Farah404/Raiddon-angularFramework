import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginupComponent } from './loginup/loginup.component';
import { RaidsComponent } from './raids/raids.component';
import { GuildsComponent } from './guilds/guilds.component';
import { PlayersComponent } from './players/players.component';
import { GameDataComponent } from './game-data/game-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GuildDetailsComponent } from './guild-details/guild-details.component';
import { RaidDetailsComponent } from './raid-details/raid-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,

  },
  {
    path:'loginup',
    component: LoginupComponent,
  },
  {
    path:'raids',
    component: RaidsComponent,
  },
  {
    path:'guilds',
    component: GuildsComponent,
  },
  {
    path:'players',
    component: PlayersComponent,
  },
  {
    path:'game-data',
    component: GameDataComponent,
  },
  {
    path:'user-profile',
    component: UserProfileComponent,
  },
  {
    path:'guilds/guild-details',
    component: GuildDetailsComponent,
  },
  {
    path:'raids/raid-details',
    component: RaidDetailsComponent,
  },
  {
    path:'players/player-details',
    component: PlayerDetailsComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  },
  {
    path:'faq',
    component: FaqComponent,
  },
  {
    path:'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }