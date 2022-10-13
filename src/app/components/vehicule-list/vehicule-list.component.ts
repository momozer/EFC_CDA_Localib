import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  vehicules !: Vehicule[]

  constructor(private vehiculeService : VehiculeService) { }

  ngOnInit(): void {
    this.vehicules = this.vehiculeService.getAllVehicules();
  }

}
