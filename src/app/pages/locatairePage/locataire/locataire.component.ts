import { LocataireListComponent } from './../locataire-list/locataire-list.component';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locataire } from 'src/app/model/locataire.model';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.scss']
})
export class LocataireComponent implements OnInit {
  @Input() locataire !: Locataire

  constructor(private locataireService : LocataireService,
    private router : Router, private listLocataire : LocataireListComponent) { }

    /**
     * La fonction onDetail() est appelée lorsque l'utilisateur clique sur le bouton "Détails". Il
     * accède au composant locataire-detail
     */
    onDetail(){
      this.router.navigateByUrl(`locataires/${this.locataire.id}`)
    }

    onSupprimer(){
      this.locataireService.supprimer(this.locataire.id)
    }

    onModifier(){
      this.listLocataire.modifierLocataire(this.locataire.id)
    }

  ngOnInit(): void {
  }

}
