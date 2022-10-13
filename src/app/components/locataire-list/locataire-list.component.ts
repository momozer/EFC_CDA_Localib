import { Component, OnInit } from '@angular/core';
import { Locataire } from 'src/app/model/locataire.model';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-locataire-list',
  templateUrl: './locataire-list.component.html',
  styleUrls: ['./locataire-list.component.scss']
})
export class LocataireListComponent implements OnInit {

  
  locataires !: Locataire[];
  
  constructor(private service : LocataireService) { }

  ngOnInit(): void {
    this.locataires = this.service.getAllLocataires();
  }

 

}
