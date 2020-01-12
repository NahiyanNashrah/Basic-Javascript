/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore, activePlayer,gamePlaying;

init();

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';


//Callback function : passing the function as a parameter and that function will be called by the function 

/* 
function btn(){

} 

document.querySelector('.btn-roll').addEventListener('click',btn)

*/


//Anonymous Function : A function that doesn't have any name and can't be reused.

/*
document.querySelector('.btn-roll').addEventListener('click',function(){
});
*/

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){

        //1. random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

    
        //3. update the roundscore if the dice value is not 1
        if(dice === 1){
            //Next player
            nextplayer();

        }else{
            //Add the score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }

});

//alert(Boolean('0'));
// var x  = null;
// alert(Number(x));


// let counter = 1;
// let a = counter++;
// alert(a);
// alert(counter);


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    //Add current score to global score
    scores[activePlayer] += roundScore;

    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if the player won the game
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    }else{
    //Next player
        nextplayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    




}



function nextplayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
        roundScore = 0;

        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;

        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}


