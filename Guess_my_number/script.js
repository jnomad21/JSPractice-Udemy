let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20
let highScore = 0
const displayMessage=function(message){
    document.querySelector('.message').textContent = message

}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
   
    if (!guess){
        displayMessage("No Number 🚩")
    }
    else if(guess===secretNumber){
        displayMessage("You got it🥇")
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor='#60b347'
        if (score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent=highScore
        }
        
    }
    else if(guess!==secretNumber){
        displayMessage(guess>secretNumber?"You're guess is too high ⬇":"You're guess is too low ⬆")
        document.querySelector('.guess').value=''
        score--;
        document.querySelector('.score').textContent = score
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value=''
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score
    
})


