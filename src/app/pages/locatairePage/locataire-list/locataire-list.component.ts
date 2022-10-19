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
  locataire !: Locataire;
  

   /**
   * booléens pour savoir si on doit afficher ou non le formulaire
   */
    newLocataire!: boolean;
    modifierLocataire!: boolean;
  
    constructor(private locataireService: LocataireService) { }
  
    ngOnInit(): void {
      this.newLocataire = false;
      this.modifierLocataire = false;
      /**
       * récupère la liste de tous les utilisateurs
       */
      this.locataires = this.locataireService.getAllLocataires();
    }
  
    /**
     * affiche le formulaire quand on appuie sur le bouton nouvel utilisateur
     */
    creerLocataire() {
      this.newLocataire = true;
      this.modifierLocataire = false;
    }
  
    /**
     * masque le formulaire  de création quand on le valide ou quand on annule la saisie
     */
    cancelNewClient() {
      this.newLocataire = false;
    }
  
    /**
     * Récupère un client par son ID en vu de le modifier
     * @param userId id du client
     */
    modifyUser(locataireId: number){
      this.modifierLocataire = true;
      this.newLocataire = false;
      this.locataire = this.locataireService.getLocataireById(locataireId);
    }
    /**
     * masque le formulaire  de mise à jour quand on le valide ou quand on annule la saisie
     */
    cancelUpdateClient() {
      this.modifierLocataire = false;
  
    }
 

}
