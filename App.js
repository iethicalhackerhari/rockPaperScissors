const game = () =>{
let pScore = 0;
let cScore = 0;

const startGame = ()=>{
    const playBtn= document.querySelector('.intro button');
    const introScreen=document.querySelector('.intro')
    const startGameScreen=document.querySelector('.start-game')
    playBtn.addEventListener('click',()=>{
        introScreen.classList.add('fadeOut')
        startGameScreen.classList.add('fadeIn')
    })
};

 const playMatch = ()=>{
     const hands= document.querySelectorAll('.hands img')
     const playerChoice = document.querySelectorAll('.buttons button')
     const playerHand = document.querySelector('.player-hand')
     const computerHand = document.querySelector('.computer-hand')

        hands.forEach((hand)=>{
            hand.addEventListener('animationend',function (){
                this.style.animation = ''
            })
        })
     
   playerChoice.forEach((playerChoice)=>{
       playerChoice.addEventListener('click',function(){
           
     const computerChoice=['rock','paper','scissors']
     const computerChoiceGenerator=Math.floor(Math.random()*3);
     const computerSelected=computerChoice[computerChoiceGenerator];
    
     setTimeout(() => {
        compareGame(this.textContent,computerSelected)
        updateScore();
        playerHand.src=`./assets/${this.textContent}.png`
        computerHand.src=`./assets/${computerSelected}.png`
         
     }, 2000);
     

     playerHand.style.animation = "shakePlayer 2s ease"
     computerHand.style.animation = "shakeComputer 2s ease"
     
       })
   })
 }
 const updateScore = ()=>{
    const playerScore= document.querySelector('.player-score p')
    const computerScore= document.querySelector('.computer-score p')
    
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    const gameOver = ()=>{
        const gameOverh1=document.querySelector('.game-over h1')
        const gameOverText=document.querySelector('.game-over ')
        const startGameScreen=document.querySelector('.start-game')
        console.log("function called");
        if (pScore>cScore) {
            gameOverh1.textContent="You Win!!"
            
        } else if(cScore>pScore){
            gameOverh1.textContent="You Lose!"
            
        }
            startGameScreen.classList.remove("fadeIn")
            setTimeout(() => {
                gameOverText.classList.add("fadeIn")
            }, 1500);
           
    }
            
    if (pScore==5||cScore==5) {
       
            gameOver();
        }
       
        
    
    console.log(pScore,cScore);
}



 const compareGame= (playerChoice,computerChoice)=>{
     statusText=document.querySelector('.status-text')

    if(playerChoice===computerChoice){
        statusText.textContent="It's a Tie";
        return
    }
    if(playerChoice==='rock'){
        if (computerChoice==='paper') {

            statusText.textContent="Computer Wins";
            cScore++;
            return
        }
        else{
            statusText.textContent="Player Wins";
            pScore++;
            return
        }
    }

    if(playerChoice==='paper'){
        if (computerChoice==='scissors') {

            statusText.textContent="Computer Wins";
            cScore++;
            return
        }
        else{
            statusText.textContent="Player Wins";
            pScore++;
            return
        }
    }


    if(playerChoice==='scissors'){
        if (computerChoice==='rock') {

            statusText.textContent="Computer Wins";
            cScore++;
            return
        }
        else{
            statusText.textContent="Player Wins";
            pScore++;
            return
        }
    }

 }
 

startGame();
playMatch();
updateScore();

}

game();
