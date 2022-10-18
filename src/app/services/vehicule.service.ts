import { Injectable } from '@angular/core';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  constructor() { }
  vehicules: Vehicule[] = [

    new Vehicule ("A", "AF541DE","Citroen", "C4",40, "disponible","voiture"),
    new Vehicule ( "B", "AF200ll", "Yamaha", "125", 80, "non disponible", "moto"),
    new Vehicule ("C", "AF541DE","Peugeot", "205",25, "disponible","voiture"),
    
  ];

 /**
  * Il renvoie un tableau d'objets Vehicule
  * @returns Un tableau d'objets Véhicule.
  */
  getAllVehicules() : Vehicule[]{
    return this.vehicules;
  }
/**
 * Il renvoie un objet vehicule du tableau vehicules, si le vehicule existe, sinon il lance une erreur
 * @param {string} vehiculeImmatriculation - chaîne de caractères
 * @returns le véhicule avec l'immatriculation donnée.
 */
  getVehiculeByImmatriculation(vehiculeImmatriculation: string): Vehicule {
    const vehicule = this.vehicules.find(vehicule => vehicule.immatriculation === vehiculeImmatriculation);
    if(!vehicule){
      throw new Error("Vehicule non existant");
    }else{
      return vehicule;
    }
  }

 /**
  * La fonction prend un véhicule en paramètre et l'ajoute au tableau des véhicules
  * @param {Vehicule} vehicule - Véhicule - c'est le paramètre que nous passons dans la fonction. C'est
  * un objet Véhicule.
  */
  addVehicule(vehicule:Vehicule){
    this.vehicules.push(vehicule);
  }

  // supprimer(immatriculation:string): void{
  //   this.vehicules.splice(this.vehicule[immatriculation], 1);
  // }

}
