const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeup;
let score;
function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
//pick a random hole to pop up a mole
function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(lastHole === hole){
        console.log('same hole!!');
        return randomHole(holes)
    }
    console.log(hole);
    lastHole = hole;
    return hole;
}
//showing up mole
function peep(){
    const time = randomTime(200,1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeup) peep();
    },time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeup = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeup = !timeup;
    }, 10000);
}

function bonk(e){
    if(!e.isTrusted)return; // to ensure user's mouse input
    score ++;
    scoreBoard.textContent = score;
    this.classList.remove('up');
}
moles.forEach(mole => mole.addEventListener('click',bonk));