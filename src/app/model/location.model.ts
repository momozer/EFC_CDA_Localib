import { Locataire } from "./locataire.model";
import { Vehicule } from "./vehicule.model";

export class Location {
  id !: number;
  dateDebut !: string;
  dateFin !: string;
  prixTotal !: number;
  locataire !: Locataire;
  vehicule !: Vehicule;

  /**
   * La fonction constructeur est une fonction spéciale appelée lorsqu'un objet est créé à partir d'une
   * classe
   * @param {number} id - number, dateDebut: Date, dateFin: Date, prixTotal: number, locataire:
   * Locataire, vehicule: Vehicule
   * @param {number} prixTotal - Numéro
   * @param {Locataire} locataire - Locataire
   * @param {Vehicule} vehicule - Véhicules
   */
  constructor(id: number, dateDebut: string, dateFin: string, prixTotal: number, locataire: Locataire, vehicule: Vehicule) {
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.prixTotal = prixTotal;
    this.locataire = locataire;
    this.vehicule = vehicule;
  }

  //Getter et Setter:
  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getDateDebut() {
    return this.dateDebut;
  }

  setDateDebut(dateDebut: string) {
    this.dateDebut = dateDebut;
  }

  getDateFin() {
    return this.dateFin;
  }

  setDateFin(dateFin: string) {
    this.dateFin = dateFin;
  }

  getPrixTotal() {
    return this.prixTotal;
  }

  setPrixTotal(prixTotal: number) {
    this.prixTotal = prixTotal;
  }
  getLocataire() {
    return this.locataire;
  }

  setLocataire(locataire: Locataire) {
    this.locataire = locataire;
  }
  getVehicule() {
    return this.vehicule;
  }

  setVehicule(vehicule: Vehicule) {
    this.vehicule = vehicule;
  }
}