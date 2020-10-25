/**
 * Classe representant un Animal.
 */
export default class Animal {
    public nom: string;
    public taille: number;

    public constructor(nom: string, taille:number){
        this.nom = nom;
        this.taille = taille;
    }

    public manger = ():void => {
        console.log(`[${this.nom}] mange`)
    }
}