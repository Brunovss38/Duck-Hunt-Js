export default class HitBar {
    #vie;
    #couleur;

    static affichage = document.querySelector('#Game');

    constructor(Vie = 100, Couleur = "White") {
        this.#vie = Vie;
        this.#couleur = Couleur;
        this.creerBarre();
    }

    get couleur() {
        return this.#couleur;
    }

    set couleur(couleur) {
        this.#couleur = couleur;
    }

    get vie() {
        return this.#vie;
    }

    set vie(vie) {
        if (vie <= 100 && vie >= 0) {
            this.#vie = vie;
        } else {
            throw ('la vie doit être comprise entre 0 et 100')
        }
    }


    get conteneur() {
        let conteneur = document.querySelector('#conteneur');
        return conteneur;
    }

    get HitBar() {
        let barredevie = document.querySelector('#barredevie');
        return barredevie;
    }
    get boutonGainVie() {
        let bouton = this.conteneur.querySelector('.gagner');
        return bouton;
    }



    gagnerVie(vie) {

        if (this.vie + vie <= 100) {
            this.vie += vie;
            if (this.vie > 40) {
                this.couleur = "green";
            }
        } else {
            this.vie = 100;
        }
        this.modifierBarre(this.vie, this.couleur)
    }

    creerBarre() {

        HitBar.affichage.innerHTML += `<div id="conteneur"><div id="bordure" style="width:500px; margin:50px auto; border: 2px solid black;">
            <div id="barredevie" style="background-color:${this.couleur};width:${this.vie}%; height:20px; text-align:center; color:#FFF;">
                ${this.vie}%
            </div></div></div>`;

        this.HitBar.innerHTML = this.vie + "%";

        this.conteneur.innerHTML += '<button class="perdre">Perdre de la vie</button><button class="gagner">Gagner de la vie</button>'

    }

    modifierBarre(vie, couleur) {
        const HitBar = document.getElementById('barredevie');
        HitBar.style.backgroundColor = couleur;
        HitBar.style.width = vie + '%';
        HitBar.textContent = vie + '%';
    }

    ajouterEcouteurBouton() {
        const bouton = document.querySelector('.gagner');
        bouton.addEventListener('click', () => {
            this.gagnerVie(10); // You can adjust the amount as needed
        });
    }

    gagnerVie(vie) {
        if (this.vie + vie <= 100) {
            this.vie += vie;
            if (this.vie > 40) {
                this.couleur = "green";
            }
        } else {
            this.vie = 100;
        }
        this.modifierBarre(this.vie, this.couleur);
    }
}