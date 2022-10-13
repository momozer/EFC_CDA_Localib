import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  vehicules !: Vehicule[]

  constructor(private vehiculeService : VehiculeService) { }

 /**
  * La fonction ngOnInit() est un hook de cycle de vie. Angular appelle ngOnInit() peu de temps après
  * la création d'un composant. C'est un bon endroit pour mettre la logique d'initialisation
  * il va chercher tous les vehicules pour faciliter l'affichage
  */
  ngOnInit(): void {
    this.vehicules = this.vehiculeService.getAllVehicules();
  }

}
