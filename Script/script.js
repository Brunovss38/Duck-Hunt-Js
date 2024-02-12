// export default 
// class Canard {
//     #id;
//     #position;
//     #score;
//     #shots;


//     constructor(id, score, shots, position) {
//         this.id = id;
//         this.possition = position;
//         this.score = score;
//         this.shots = shots


//         this.creerHTML();
//     }



//     get id() {
//         return this.#id;
//     }
//     set id(id) {
//         this.id = id;
//     }


//     get score() {
//         return this.#score
//     }

//     set score(score) {
//         this.#score = score
//     }


//     get possition() {
//         return this.#possition
//     }

//     set possition(position) {
//         this.#possition = position
//     }
//     get shots() {
//         return this.#shots;
//     }

//     set shots(shots) {
//         if (shots < 0) {
//             alert('Game Over !');
//         } else {
//             this.#shots = shots;
//         }
//     }

// }


// const duck = document.querySelector('.duck');

// duck.addEventListener('click', () => {
//     augmenterLeScore();
//     DeadDuck();
//     MoinsUnTirs()


// });

// //augmente le score 1000

// const augmenterLeScore = () => {

//     const score = document.querySelector(".Score").innerHTML;
//     const scoreHTML = document.querySelector(".Score");
//     let count = Number(score);
//     scoreHTML.innerHTML = count + 1000;
// };

// //remplacer le canard par un canard morts

// const DeadDuck = () => {
//     const deadDuck = document.getElementById('Duck');
//     deadDuck.src = 'Medias/duck-shot1.png';

// }

// //diminue la quantite de tirs
// // const MoinsUnTirs = () => {
// //     const MoinsUnTirs = document.querySelector('BackgroundIMG');
// //     MoinsUnTirs.src = "Medias/shots2.png";

// // }

// let animateDuck = document.getElementById('#Duck');

// function() {
//     let position = 0;
//     let duck = document.getElementById('#Duck');
//     let interval = setInterval(animation, 5);


//     function animation() {


//         if (position == 400) {
//             clearInterval(interval);
//         } else
//     }



// }

// export default 
class Canard {
    #id;
    #position;
    #score;



    constructor(id, score, position) {
        this.id = id;
        this.possition = position;
        this.score = score;

        this.creerHTML();
    }

    // creerHTML(){
    //     document.main.innerHTML += 
    // }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.id = id;
    }


    get score() {
        return this.#score
    }

    set score(score) {
        this.#score = score
    }


    get possition() {
        return this.#position
    }

    set possition(position) {
        this.#position = position
    }
    // get shots() {
    //     return this.#shots;
    // }

    // set shots(shots) {
    //     if (shots < 0) {
    //         alert('Game Over !');
    //     } else {
    //         this.#shots = shots;
    //     }
    // }

}


const duck = document.querySelector('.duck');

duck.addEventListener('click', () => {
    augmenterLeScore();
    DeadDuck();
    MoinsUnTirs()


});

//augmente le score 1000

const augmenterLeScore = () => {

    const score = document.querySelector(".Score").innerHTML;
    const scoreHTML = document.querySelector(".Score");
    let count = Number(score);
    scoreHTML.innerHTML = count + 1000;
};

//remplacer le canard par un canard morts

const DeadDuck = () => {
    const deadDuck = document.getElementById('Duck');
    deadDuck.src = 'Medias/duck-shot1.png';

}

// // diminue la quantite de tirs
// const MoinsUnTirs = () => {
//     const MoinsUnTirs = document.querySelector('BackgroundIMG');
//     MoinsUnTirs.src = "Medias/shots2.png";

// }

