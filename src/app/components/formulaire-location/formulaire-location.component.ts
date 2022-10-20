import { VehiculeService } from 'src/app/services/vehicule.service';
import { LocationListComponent } from './../../location-list/location-list.component';
import { LocationService } from './../../services/location.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Locataire } from 'src/app/model/locataire.model';
import { Location } from 'src/app/model/location.model';
import { Vehicule } from 'src/app/model/vehicule.model';

@Component({
  selector: 'app-formulaire-location',
  templateUrl: './formulaire-location.component.html',
  styleUrls: ['./formulaire-location.component.scss']
})
export class FormulaireLocationComponent implements OnInit {

  @Input() location!: Location;
  vehicule!: Vehicule;
  locataire !: Locataire;
  locataires !: Locataire[];
  vehicules!: Vehicule[] ;

  titreFormulaire !: string;

  /**
   * Création du formulaire pour les véhicules
   */
  formLocation: FormGroup = this.formBuilder.group({
    dateDebut: '',
    dateFin: '',
    prixTotal: '',
    locataire: '',
    vehicule: ''
  })

  constructor(private locationService: LocationService,
    private formBuilder: FormBuilder,
    private locationList: LocationListComponent,
    private vehiculeService : VehiculeService
  ) { }

  ngOnInit(): void {
  
    this.vehicules = this.vehiculeService.getAllVehicules();
    
    

   this.formLocation.patchValue({
    dateDebut: this.location.dateDebut,
    dateFin: this.location.dateFin,
    prixTotal: this.location.prixTotal,
    locataire: this.location.locataire,
    vehicule: this.location.vehicule
  })
  }
onSubmit(){
  if (this.locationList.newLocation) {
    this.locationService.addLocation(this.formLocation.value)
  } else {
    this.locationService.modifier(this.formLocation.value, this.location.id);
  }
  this.annuler();
}

annuler() { }

}
