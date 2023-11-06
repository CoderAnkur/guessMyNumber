'use strict';

// document.querySelector('.message').textContent='Correct Number🎉'

// document.querySelector('.number').textContent='12';

// document.querySelector('.score').textContent='15';


let secretNumber= Math.trunc(Math.random()*20)+1
let score=20;

let highScore=0;

const displayMessage=function(message){
  document.querySelector('.message').textContent=message
}



document.querySelector('.check').addEventListener('click',function(){
  let guess= Number(document.querySelector('.guess').value)
  if(!guess){
    // document.querySelector('.message').textContent='No Number⛔'
    displayMessage('No Number⛔')
  } else if(guess===secretNumber){
    // document.querySelector('.message').textContent='Correct Number🎉'

    displayMessage('Correct Number!🎉')

    document.querySelector('body').style.backgroundColor='#2E8B57'

    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent=secretNumber
    
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }

  

    

  } else if(guess>secretNumber){
    if(score>1){
    // document.querySelector('.message').textContent='Too High!'
    displayMessage('Too High!')
    score--
    document.querySelector('.score').textContent=score
    }else{
      // document.querySelector('.message').textContent='You Lost the Game😥'
      displayMessage('You Lost the Game😢')
      document.querySelector('.score').textContent=0
    }
  }else if(guess<secretNumber){
    if(score>1){
    // document.querySelector('.message').textContent='Too Low!'
    displayMessage('Too Low!')
    score--
    document.querySelector('.score').textContent=score
  }else{
    // document.querySelector('.message').textContent='You Lost the Game😥'
    displayMessage('You Lost the Game😢')

    document.querySelector('.score').textContent=0

    

  }
}})


document.querySelector('.again').addEventListener('click',function(){
  score=20
 document.querySelector('.score').textContent = score;
  secretNumber= Math.trunc(Math.random()*20)+1

  // document.querySelector('.message').textContent='Start Guessing...'
  displayMessage('Start Guessing...')

  document.querySelector('.number').textContent='?';


  document.querySelector('.guess').value=''

  document.querySelector('body').style.backgroundColor='#222'
  document.querySelector('.number').style.width='15rem'



})











