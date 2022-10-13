export class Vehicule{
    etat !: string;
    immatriculation !: string;
    marque !: string;
    modele !: string;
    prix !: number;
    status !: string;
    type !: string;


    /* Un constructeur. */
    constructor(etat: string, immatriculation: string, marque: string, modele: string, prix: number, status: string, type: string) {
        this.etat = etat; 
        this.immatriculation = immatriculation; 
        this.marque = marque; 
        this.modele = modele; 
        this.status = status; 
        this.type = type;
    };
}