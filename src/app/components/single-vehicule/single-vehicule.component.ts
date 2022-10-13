import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-single-vehicule',
  templateUrl: './single-vehicule.component.html',
  styleUrls: ['./single-vehicule.component.scss']
})
export class SingleVehiculeComponent implements OnInit {
  vehicule !: Vehicule;


  constructor(private vehiculeService : VehiculeService,
    private route : ActivatedRoute) { }

/**
 * Il obtient le numéro d'immatriculation du véhicule à partir de l'URL, puis l'utilise pour obtenir le
 * véhicule du service
 */
  ngOnInit(): void {
    const vehiculeImmatriculation = this.route.snapshot.params['immatriculation'];
    this.vehicule = this.vehiculeService.getVehiculeByImmatriculation(vehiculeImmatriculation);
  }

 /**
  * Cela modifie un element en prenant son id qui est son immatriculation et permet la modification.
  */
  onModifier(){}

  /**
   * Il prend une chaîne en paramètre et ne renvoie rien
   * @param {string} immatriculation - chaîne de caractères
   */
  onSupprimer(immatriculation: string){}


}
