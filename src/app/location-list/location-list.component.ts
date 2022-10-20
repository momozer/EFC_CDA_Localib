import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  locations !: Location[];
  location !: Location;

  newLocation !: boolean;
  modifLocation!: boolean;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.newLocation = false;
    this.modifLocation = false;
    this.locations = this.locationService.getAllLocations();
  }

  /**
   * affiche le formulaire quand on appuie sur le bouton nouvel utilisateur
   */
  creerLocation() {
    this.newLocation = true;
    this.modifLocation = false;
  }

  /**
   * masque le formulaire  de création quand on le valide ou quand on annule la saisie
   */
  cancelNewLocation() {
    this.newLocation = false;
  }

  /**
   * Récupère un client par son ID en vu de le modifier
   * @param locationId id du client
   */
  modifierLocation(locationId: number) {
    this.modifLocation = true;
    this.newLocation = false;
    this.location = this.locationService.getLocationById(locationId);
  }
  /**
   * masque le formulaire  de mise à jour quand on le valide ou quand on annule la saisie
   */
  annulerModificationLocation() {
    this.modifLocation = false;
  }

}
