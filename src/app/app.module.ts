import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LocataireComponent } from './components/locataire/locataire.component';
import { LocataireListComponent } from './components/locataire-list/locataire-list.component';
import { SingleLocataireComponent } from './components/single-locataire/single-locataire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocataireComponent,
    LocataireListComponent,
    SingleLocataireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
