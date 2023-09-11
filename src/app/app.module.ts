import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { HomeComponent } from './pages/home/home.component';
import { GamesListComponent } from './pages/games-list/games-list.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    BigCardComponent,
    SmallCardsComponent,
    HomeComponent,
    GamesListComponent,
    DetailsComponent,
    GameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
