  import { Injectable } from '@angular/core';
import { Locataire } from '../model/locataire.model';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {
  locataires : Locataire[] = [
    
      new Locataire ( 1, "Mohamed", "Le che", "15/08/1996", "mohamed@mail.com", "0608050906"),
      new Locataire ( 2,"Pierre-Marie","Adam","17/01/1956", "pmadam@mail.com", "0608050906"),
      new Locataire ( 3, "Guy", "Bensoussan", "25/03/1950", "gbensouss@mail.com","0608050906"),
      new Locataire ( 4, "Michel","David", "10/07/1952","mddm@mail.com","0608050906"),
      new Locataire ( 5, "Antoine","Sillani", "15/08/1991", "alls@mail.com", "0608050906"),
      new Locataire ( 6, "Jean", "Valjean", "15/08/1983", "jvd@mail.com", "0608050906")    
  ];

  getAllLocataires(): Locataire[] {
    return this.locataires;
  }

 /**
  * Il renvoie un objet locataire du tableau locataires, étant donné un identifiant locataire
  * @param {number} locataireId - Numéro
  * @returns Le locataire avec l'identifiant passé en paramètre.
  */
 
  getLocataireById(locataireId: number): Locataire {
    const locataire = this.locataires.find(locataire => locataire.id === locataireId);
    if (!locataire) {
      throw new Error ('Locataire non trouvé');
    }else {
      return locataire;
    }
  }

  /**
   * Il prend un objet locataire comme argument et l'ajoute au tableau locataires
   * @param {Locataire} locataire - Locataire est le paramètre que nous passons dans la fonction.
   */
  addLocataire(locataire: Locataire){
    locataire.id = this.locataires.length + 1;
    this.locataires.push(locataire);
  }
  

 /**
  * Il supprime l'élément à l'index du tableau qui correspond à l'id du locataire
  * @param {number} locataireId - Numéro
  */
  supprimer(locataireId : number){
    this.locataires.splice(locataireId -1 ,1);
  }


  constructor() { }
}
