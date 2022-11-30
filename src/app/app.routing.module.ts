import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AuctionHouseComponent } from './auction-house/auction-house.component';
import { RaidReportsComponent } from './raid-reports/raid-reports.component';
import { PlayerRankingsComponent } from './player-rankings/player-rankings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserSetupComponent } from './user-setup/user-setup.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,

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
  {
    path:'user-profile-update',
    component: UpdateProfileComponent,
  },
  {
    path:'auction-house',
    component: AuctionHouseComponent,
  },
  {
    path:'raid-reports',
    component: RaidReportsComponent,
  },
  {
    path:'players-rankings',
    component: PlayerRankingsComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'user-profile/user-setup',
    component: UserSetupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }