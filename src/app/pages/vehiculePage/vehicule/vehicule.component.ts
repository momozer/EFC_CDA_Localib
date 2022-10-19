import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { VehiculeListComponent } from '../vehicule-list/vehicule-list.component';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  @Input() vehicule !: Vehicule

  constructor(private vehiculeService : VehiculeService,
    private router : Router, private vehiculeList : VehiculeListComponent) { }
/**
 * Il navigue vers la page de détail du véhicule actuel
 */

    onDetail(){
      this.router.navigateByUrl(`vehicules/${this.vehicule.id}`);
    }

    onSupprimer(){
      this.vehiculeService.supprimer(this.vehicule.id);
    }

  ngOnInit(): void {
  }
  modifierVehicule(){
    this.vehiculeList.modifierVehicle(this.vehicule.id)
  }

}
