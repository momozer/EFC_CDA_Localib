import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LocataireComponent } from './components/locataire/locataire.component';
import { LocataireListComponent } from './components/locataire-list/locataire-list.component';
import { SingleLocataireComponent } from './components/single-locataire/single-locataire.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FormulaireLocataireComponent } from './components/formulaire-locataire/formulaire-locataire.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';
import { FormulaireVehiculeComponent } from './components/formulaire-vehicule/formulaire-vehicule.component';
import { SingleVehiculeComponent } from './components/single-vehicule/single-vehicule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocataireComponent,
    LocataireListComponent,
    SingleLocataireComponent,
    AccueilComponent,
    FormulaireLocataireComponent,
    VehiculeComponent,
    VehiculeListComponent,
    FormulaireVehiculeComponent,
    SingleVehiculeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
