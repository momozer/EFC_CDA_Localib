import { LocataireListComponent } from './components/locataire-list/locataire-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleLocataireComponent } from './components/single-locataire/single-locataire.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';
import { SingleVehiculeComponent } from './components/single-vehicule/single-vehicule.component';

const routes: Routes = [
  {path:'locataires' , component: LocataireListComponent} ,
  {path:'locataires/:id' , component: SingleLocataireComponent} ,
  {path: 'vehicules/:immatriculation', component: SingleVehiculeComponent},
  {path:'' , component: AccueilComponent} ,
  {path:'vehicules' , component: VehiculeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
