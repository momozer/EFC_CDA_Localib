import { Injectable } from '@angular/core';
import { Locataire } from '../model/locataire.model';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {
  locataires : Locataire[] = [
    {
      id: 1,
      prenom : "Mohamed",
      nom : "Le che",
      dateNaissance : "15/08/1996",
      mail : "mohamed@mail.com",
      tel : "0608050906"
    },
    {
      id: 2,
      prenom : "Pierre-Marie",
      nom : "Adam",
      dateNaissance : "17/01/1956",
      mail : "pmadam@mail.com",
      tel : "0608050906"
    },
    {
      id: 3,
      prenom : "Guy",
      nom : "Bensoussan",
      dateNaissance : "25/03/1950",
      mail : "gbensouss@mail.com",
      tel : "0608050906"
    },
    {
      id: 4,
      prenom : "Michel",
      nom : "David",
      dateNaissance : "10/07/1952",
      mail : "mddm@mail.com",
      tel : "0608050906"
    },
    {
      id: 5,
      prenom : "Antoine",
      nom : "Sillani",
      dateNaissance : "15/08/1991",
      mail : "alls@mail.com",
      tel : "0608050906"
    },
    {
      id: 6,
      prenom : "Jean",
      nom : "Valjean",
      dateNaissance : "15/08/1983",
      mail : "jvd@mail.com",
      tel : "0608050906"
    },
  ];

  getAllLocataires(): Locataire[] {
    return this.locataires;
  }

  getLocataireById(locataireId: number): Locataire {
    const locataire = this.locataires.find(locataire => locataire.id === locataireId);
    if(!locataire){
      throw new Error("locataire non existant");
    }else{
      return locataire;
    }
  }
  constructor() { }
}