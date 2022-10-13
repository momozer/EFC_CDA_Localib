import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  @Input() vehicule !: Vehicule

  constructor(private vehiculeService : VehiculeService,
    private router : Router) { }

    onDetail(){
      this.router.navigateByUrl(`vehicules/${this.vehicule.immatriculation}`);
    }

    onSupprimer(){}

  ngOnInit(): void {
  }

}
