import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GuildsComponent } from './guilds/guilds.component';
import { RaidsComponent } from './raids/raids.component';
import { PlayersComponent } from './players/players.component';
import { GameDataComponent } from './game-data/game-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GuildDetailsComponent } from './guild-details/guild-details.component';
import { RaidDetailsComponent } from './raid-details/raid-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { NavbarConnectedComponent } from './navbar-connected/navbar-connected.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ContactPlayerModalComponent } from './contact-player-modal/contact-player-modal.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ApplyToGuildComponent } from './apply-to-guild-modal/apply-to-guild.component';
import { CreateRaidModalComponent } from './create-raid-modal/create-raid-modal.component';
import { AuctionHouseComponent } from './auction-house/auction-house.component';
import { RaidReportsComponent } from './raid-reports/raid-reports.component';
import { PlayerRankingsComponent } from './player-rankings/player-rankings.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ApiService } from './_services/api.service';
import { httpInterceptorProviders } from './_helpers/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    GuildsComponent,
    RaidsComponent,
    PlayersComponent,
    GameDataComponent,
    UserProfileComponent,
    GuildDetailsComponent,
    RaidDetailsComponent,
    PlayerDetailsComponent,
    NavbarConnectedComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ContactPlayerModalComponent,
    UpdateProfileComponent,
    ApplyToGuildComponent,
    CreateRaidModalComponent,
    AuctionHouseComponent,
    RaidReportsComponent,
    PlayerRankingsComponent,
    RegisterComponent,
    LoginComponent,
    UserSetupComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [ApiService, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
