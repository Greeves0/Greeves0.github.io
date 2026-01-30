const button = document.getElementById('button');
const audio1 = new Audio('assets/donquixote.mp3');
const audio2 = new Audio('assets/WH1.ogg');
const audio3 = new Audio('assets/WH2.ogg');
const audio4 = new Audio('assets/WH3.ogg');
const audio5 = new Audio('assets/Dullahan.wav');
const audio6 = new Audio('assets/login_10301_1.wav');
const audio7 = new Audio('assets/login_10301_2.wav');
const audio8 = new Audio('assets/login_10301_3.wav');
const audio9 = new Audio('assets/login_10301_4.wav');
const audio10 = new Audio('assets/login_10301_5.wav');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let liste=[audio1, audio2, audio3, audio4, audio5, audio6, audio7];

button.addEventListener('click', () =>{
    let random = getRandomInt(7);
    let audio = liste[random];
    audio.play();
    console.log(random);
})