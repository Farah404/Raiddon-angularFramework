import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RaidsComponent } from './raids/raids.component';
import { GuildsComponent } from './guilds/guilds.component';
import { PlayersComponent } from './players/players.component';
import { GameDataComponent } from './game-data/game-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GuildDetailsComponent } from './guild-details/guild-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AuctionHouseComponent } from './auction-house/auction-house.component';
import { PlayerRankingsComponent } from './player-rankings/player-rankings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DressingRoomComponent } from './dressing-room/dressing-room.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { RaidDetailsComponent } from './raid-details/raid-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home', pathMatch: 'full',
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'raids',
    component: RaidsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'guilds',
    component: GuildsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'players',
    component: PlayersComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'game-data',
    component: GameDataComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'user-profile',
    component: UserProfileComponent,
    canActivate:[AuthGuardService]
    
  },
  {
    path:'guilds/guild-details/:id',
    component: GuildDetailsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'home/guild-details/:id',
    component: GuildDetailsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'user-profile/guild-details/:id',
    component: GuildDetailsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'raids/raid-details/:id',
    component: RaidDetailsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'user-profile/raid-details/:id',
    component: RaidDetailsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'players/player-details/:id',
    component: PlayerDetailsComponent,
    canActivate:[AuthGuardService]
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
    path:'auction-house',
    component: AuctionHouseComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'players-rankings',
    component: PlayerRankingsComponent,
    canActivate:[AuthGuardService]
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
    path:'dressing-room',
    component: DressingRoomComponent,
    canActivate:[AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }