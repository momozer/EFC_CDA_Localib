import { LocataireService } from 'src/app/services/locataire.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-formulaire-locataire',
  templateUrl: './formulaire-locataire.component.html',
  styleUrls: ['./formulaire-locataire.component.scss']
})
export class FormulaireLocataireComponent implements OnInit {


  constructor(private locataireService : LocataireService) { }

  ngOnInit(): void {
  }
  addLocataire(){
    
  }



}
