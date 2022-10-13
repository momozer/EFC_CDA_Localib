import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-formulaire-vehicule',
  templateUrl: './formulaire-vehicule.component.html',
  styleUrls: ['./formulaire-vehicule.component.scss']
})
export class FormulaireVehiculeComponent implements OnInit {

  constructor(private vehiculeService : VehiculeService) { }

  addVehicule(){
    
  }

  ngOnInit(): void {
  }

}
