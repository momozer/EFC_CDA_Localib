import { Injectable } from '@angular/core';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  vehicules: Vehicule[] = [
    {
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "voiture"
    },
    {
      etat : "moyen",
      immatriculation : "AF200ll",
      marque : "Yamaha",
      modele : "125",
      prix : 80,
      status : "non disponible",
      type : "moto"
    },
    {
      etat : "mauvais",
      immatriculation : "AF541DE",
      marque : "Peugeot",
      modele : "205",
      prix : 25,
      status : "disponible",
      type : "voiture"
    },
    {
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "Trafic",
      prix : 50,
      status : "disponible",
      type : "camion"
    },
    {
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "utilitaire"
    },
    {
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "voiture"
    }
  ];

  getAllVehicules() : Vehicule[]{
    return this.vehicules;
  }
  getVehiculeByImmatriculation(vehiculeImmatriculation: string): Vehicule {
    const vehicule = this.vehicules.find(vehicule => vehicule.immatriculation === vehiculeImmatriculation);
    if(!vehicule){
      throw new Error("Vehicule non existant");
    }else{
      return vehicule;
    }
  }

  constructor() { }
}
