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

  ngOnInit(): void {
    const vehiculeImmatriculation = this.route.snapshot.params['immatriculation'];
    this.vehicule = this.vehiculeService.getVehiculeByImmatriculation(vehiculeImmatriculation);
  }

  onModifier(){}

  onSupprimer(){}


}
