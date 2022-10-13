import { Injectable } from '@angular/core';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  constructor() { }
  vehicules: Vehicule[] = [
    {
      etat : "A",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "voiture"
    },
    {
      etat : "B",
      immatriculation : "AF200ll",
      marque : "Yamaha",
      modele : "125",
      prix : 80,
      status : "non disponible",
      type : "moto"
    },
    {
      etat : "C",
      immatriculation : "AF541DE",
      marque : "Peugeot",
      modele : "205",
      prix : 25,
      status : "disponible",
      type : "voiture"
    },
    {
      etat : "A",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "Trafic",
      prix : 50,
      status : "disponible",
      type : "camion"
    },
    {
      etat : "A",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "utilitaire"
    },
    {
      etat : "A",
      immatriculation : "AF541DE",
      marque : "Citroen",
      modele : "C4",
      prix : 40,
      status : "disponible",
      type : "voiture"
    }
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
