import { Injectable } from '@angular/core';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  vehicules: Vehicule[] = [
    {
      id : 1,
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "voiture"
    },
    {
      id : 2,
      etat : "moyen",
      immatriculation : "AF541DE",
      marque : "Yamaha",
      modele : "125",
      prix : 80,
      status : "non disponible",
      type : "moto"
    },
    {
      id : 3,
      etat : "mauvais",
      immatriculation : "AF541DE",
      marque : "Peugeot",
      modele : "205",
      prix : 25,
      status : "disponible",
      type : "voiture"
    },
    {
      id : 4,
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "Trafic",
      prix : 50,
      status : "disponible",
      type : "camion"
    },
    {
      id : 5,
      etat : "bon",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "utilitaire"
    },
    {
      id : 1,
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
  getVehiculeById(vehiculeId: number): Vehicule {
    const vehicule = this.vehicules.find(vehicule => vehicule.id === vehiculeId);
    if(!vehicule){
      throw new Error("Vehicule non existant");
    }else{
      return vehicule;
    }
  }

  constructor() { }
}
