import { Locataire } from "./locataire.model";
import { Vehicule } from "./vehicule.model";

export class Location {
    id !: number;
    dateDebut !: Date;
    dateFin !: Date;
    prixTotal !: number;
    locataire !: Locataire;
    vehicule !: Vehicule;

  /**
   * La fonction constructeur est une fonction spéciale appelée lorsqu'un objet est créé à partir d'une
   * classe
   * @param {number} id - number, dateDebut: Date, dateFin: Date, prixTotal: number, locataire:
   * Locataire, vehicule: Vehicule
   * @param {Date} dateDebut - Date
   * @param {Date} dateFin - Date
   * @param {number} prixTotal - Numéro
   * @param {Locataire} locataire - Locataire
   * @param {Vehicule} vehicule - Véhicules
   */
    constructor(id: number, dateDebut: Date, dateFin: Date, prixTotal: number, locataire: Locataire, vehicule: Vehicule) {
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.prixTotal = prixTotal;
        this.locataire = locataire;
        this.vehicule = vehicule;
    }
}