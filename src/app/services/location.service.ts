import { Locataire } from 'src/app/model/locataire.model';
import { Injectable } from '@angular/core';
import { Location } from '../model/location.model';
import { Vehicule } from '../model/vehicule.model';
import { VehiculeService } from './vehicule.service';
import { LocataireService } from './locataire.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  locationmodif !: Location;
  vehicule !: Vehicule;
  locataire!: Locataire;

  /**
   * tableau de location.
   */
  locations : Location[] = [
    
      new Location ( 1, "03/04/2022", "17/04/2022",1500 , this.locataire, this.vehicule),
      new Location ( 2, "01/09/2022", "15/09/2022",1500, this.locataire, this.vehicule),    
  ];

  getAllLocations(): Location[] {
    return this.locations;
  }

 /**
  * Il renvoie un objet locataire du tableau locations, étant donné un identifiant location
  * @param {number} locationId - Numéro
  * @returns La location avec l'identifiant passé en paramètre.
  */
 
  getLocationById(locationId: number): Location {
    const location = this.locations.find(location => location.id === locationId);
    if (!location) {
      throw new Error ('Location non trouvée');
    }else {
      return location;
    }
  }

  /**
   * Il prend un objet location comme argument et l'ajoute au tableau locations
   * @param {Location} location - Location est le paramètre que nous passons dans la fonction.
   */
  addLocation(location: Location){
    location.id = this.locations.length + 1;
    this.locations.push(location);
  }
  

 /**
  * Il supprime l'élément à l'index du tableau qui correspond à l'id du location
  * @param {number} locationId - Numéro
  */
  supprimer(locationId : number): void{
    this.locations.splice(locationId -1 ,1);
  }

  modifier(locationModifier: Location, locationId: number){
    this.locationmodif = (this.getLocationById(locationId));
    this.locationmodif.setDateDebut(locationModifier.dateDebut);
    this.locationmodif.setDateFin((locationModifier.dateFin));
    this.locationmodif.setPrixTotal(locationModifier.prixTotal);
    this.locationmodif.setLocataire(locationModifier.locataire);
    this.locationmodif.setVehicule(locationModifier.vehicule);
  }

  constructor(private servicelocataire : LocataireService,
    private serviceVehicule : VehiculeService) { }

  getAllLocatairesContrat(){
    return this.servicelocataire.getAllLocataires;
    
  }
  getAllVehciulesContrat(){
    return this.serviceVehicule.getAllVehicules();
    
  }
}
