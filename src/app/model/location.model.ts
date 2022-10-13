import { Locataire } from "./locataire.model";
import { Vehicule } from "./vehicule.model";

export class Location{
    id !: number;
    dateDebut !: Date;
    dateFin !: Date;
    prixTotal !: number;
    locataire !: Locataire;
    vehicule !: Vehicule;
}