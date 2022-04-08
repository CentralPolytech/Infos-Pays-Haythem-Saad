import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './Components/Liste/Liste.component';
import { CardComponent } from './Components/Card/Card.component';
import { HomeComponent } from './Components/home/home.component';
import { ContinentsComponent } from './Components/Continents/Continents.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/Details/Details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    CardComponent,
    HomeComponent,
    ContinentsComponent,
    NavbarComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
