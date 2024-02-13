import HitBar from "./Modules/HitBar.js"

const tableau = [];
// On instancie ensuite notre classe.
tableau.push(new HitBar());

// On lit le tableau, pour retrouver toutes les barres :
tableau.forEach(barre => {
    barre.boutonGainVie.addEventListener('click', () => {
        barre.gagnerVie(10);
    })
})


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




const BlueDuck = document.querySelector('#BlueDuck');

BlueDuck.addEventListener('click', () => {
    moveDuck();
    augmenterLeScoreBlueDuck();

});

const getRandomNum = (num) => {
    return Math.floor(Math.random() * Math.floor(num));
}

const moveDuck = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    BlueDuck.style.top = getRandomNum(45) + '%';
    BlueDuck.style.left = getRandomNum(100) + '%';

}

//augmente le score 1500
const augmenterLeScoreBlueDuck = () => {

    const score = document.querySelector(".Score").innerHTML;
    const scoreHTML = document.querySelector(".Score");
    let count = Number(score);
    scoreHTML.innerHTML = count + 1500;
};