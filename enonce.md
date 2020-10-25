# Enoncé de l'exercice ZOO

## Présentation

Le but de cet exercice est de comprendre le fonctionnement de la programmation orienté objet en typescript.

## Exercice 1: Les classes:

Le but de cette exercice est de creer une classe `animal` qui represente un animal.
- Un animal possede un nom et une taille. il possede donc deux attributs (dans ce cas propriété)
- Un animal peut manger. La classe animal possede une methode `manger()` qui affiche le message '<NOM_DE_LANIMAL> mange'.

Voici un exemple avec une voiture:
```TypeScript
/**
* Cette classe represente une voiture
*/
class Voiture {
    public marque:string;
    public model:string;
    public km:string;

    /**
    * Cette methode fait rouler la voiture en affichant un message dans la console
    */ 
    public rouler = () : void => {
        console.log(`${model} roule!`)
    }
}
```

Ecrire une classe `Animal` qui respecte les preceptes précedents.