import { LocataireListComponent } from './components/locataire-list/locataire-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleLocataireComponent } from './components/single-locataire/single-locataire.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';

const routes: Routes = [
  {path:'locataires' , component: LocataireListComponent} ,
  {path:'locataires/:id' , component: SingleLocataireComponent} ,
  {path:'' , component: AccueilComponent} ,
  {path:'vehicules' , component: VehiculeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
