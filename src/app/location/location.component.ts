import { LocationService } from './../services/location.service';
import { Locataire } from 'src/app/model/locataire.model';
import { Component, Input, OnInit } from '@angular/core';
import { Vehicule } from '../model/vehicule.model';
import { Location } from '../model/location.model';
import { VehiculeService } from '../services/vehicule.service';
import { LocataireService } from '../services/locataire.service';
import { Router } from '@angular/router';
import { LocationListComponent } from '../location-list/location-list.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input()location !: Location;
  vehicules : Vehicule[] = [];
  locataires : Locataire[] = [];
  vehicule !: Vehicule;
  locataire!:Locataire;
  locations!:Location[];

  constructor(
    private locationService : LocationService,
    private vehiculeservice : VehiculeService,
    private locataireservice : LocataireService,
    private router : Router,
    private listLocation : LocationListComponent
    ) { }


      /**
     * La fonction onDetail() est appelée lorsque l'utilisateur clique sur le bouton "Détails". Il
     * accède au composant location-detail
     */
       onDetail(){
        this.router.navigateByUrl(`locations/${this.location.id}`)
        }

        onSupprimer(){
          this.locationService.supprimer(this.location.id)
        }
        onModifier(){
          this.listLocation.modifierLocation(this.location.id)
        }
      
  ngOnInit(): void {
    this.initList();
  }

  initList() {
    this.vehiculeservice.getAllVehicules()
  
    
  }

  openVehicule(vehicule : Vehicule) {
    
  }

}
