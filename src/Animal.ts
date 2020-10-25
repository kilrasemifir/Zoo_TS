/**
 * Classe representant un Animal.
 */
export default class Animal {
    public nom: string;
    public taille: number;

    public manger = ():void => {
        console.log(`[${this.nom}] mange`)
    }
}