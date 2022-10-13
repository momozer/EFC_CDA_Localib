import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locataire } from 'src/app/model/locataire.model';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-single-locataire',
  templateUrl: './single-locataire.component.html',
  styleUrls: ['./single-locataire.component.scss']
})
export class SingleLocataireComponent implements OnInit {

  locataire !: Locataire;

  constructor(private locataireService : LocataireService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    const locataireId = +this.route.snapshot.params['id'];    
    this.locataire = this.locataireService.getLocataireById(locataireId);
  }

  onSupprimer(){}
  onModifier(){}

}
