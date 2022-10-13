import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Locataire } from 'src/app/model/locataire.model';

@Component({
  selector: 'app-formulaire-locataire',
  templateUrl: './formulaire-locataire.component.html',
  styleUrls: ['./formulaire-locataire.component.scss']
})
export class FormulaireLocataireComponent implements OnInit {
@Output()
locataire = new EventEmitter<Locataire>()
  constructor() { }

  ngOnInit(): void {
  }
  addLocataire(){   
  }



}
