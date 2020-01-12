/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore, activePlayer ;

scores = [0,0];
roundscore = 0;
activePlayer = 0;


//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


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

    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    


});