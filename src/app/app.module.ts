import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaxPipe } from './player-rankings/player-rankings.component';

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
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ContactPlayerModalComponent } from './contact-player-modal/contact-player-modal.component';
import { ApplyToGuildComponent } from './apply-to-guild-modal/apply-to-guild.component';
import { CreateRaidModalComponent } from './create-raid-modal/create-raid-modal.component';
import { AuctionHouseComponent } from './auction-house/auction-house.component';
import { PlayerRankingsComponent } from './player-rankings/player-rankings.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ApiService } from './_services/api.service';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { PreferencesModalComponent } from './preferences-modal/preferences-modal.component';
import { UpdateProfileModalComponent } from './update-profile-modal/update-profile-modal.component';
import { DressingRoomComponent } from './dressing-room/dressing-room.component';
import { CreateGuildModalComponent } from './create-guild-modal/create-guild-modal.component';
import { RaidDetailsComponent } from './raid-details/raid-details.component';
import { UpdatePlayableCharacterModalComponent } from './update-playable-character-modal/update-playable-character-modal.component';
import { HumanModalComponent } from './_wiki/human-modal/human-modal.component';
import { OrcModalComponent } from './_wiki/orc-modal/orc-modal.component';
import { DwarfModalComponent } from './_wiki/dwarf-modal/dwarf-modal.component';
import { NightElfModalComponent } from './_wiki/night-elf-modal/night-elf-modal.component';
import { BloodElfModalComponent } from './_wiki/blood-elf-modal/blood-elf-modal.component';
import { UndeadModalComponent } from './_wiki/undead-modal/undead-modal.component';
import { TaurenModalComponent } from './_wiki/tauren-modal/tauren-modal.component';
import { GnomeModalComponent } from './_wiki/gnome-modal/gnome-modal.component';
import { TrollModalComponent } from './_wiki/troll-modal/troll-modal.component';
import { DraeneiModalComponent } from './_wiki/draenei-modal/draenei-modal.component';
import { ClassesModalComponent } from './_wiki/classes-modal/classes-modal.component';
import { ApplyToRaidModalComponent } from './apply-to-raid-modal/apply-to-raid-modal.component';

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
    PlayerDetailsComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ContactPlayerModalComponent,
    ApplyToGuildComponent,
    CreateRaidModalComponent,
    AuctionHouseComponent,
    PlayerRankingsComponent,
    RegisterComponent,
    LoginComponent,
    PreferencesModalComponent,
    UpdateProfileModalComponent,
    DressingRoomComponent,
    CreateGuildModalComponent,
    RaidDetailsComponent,
    MaxPipe,
    UpdatePlayableCharacterModalComponent,
    HumanModalComponent,
    OrcModalComponent,
    DwarfModalComponent,
    NightElfModalComponent,
    BloodElfModalComponent,
    UndeadModalComponent,
    TaurenModalComponent,
    GnomeModalComponent,
    TrollModalComponent,
    DraeneiModalComponent,
    ClassesModalComponent,
    ApplyToRaidModalComponent
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
