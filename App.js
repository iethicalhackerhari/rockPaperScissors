const game = () => {
    let pScore = 0;
    let cScore = 0;
    const yay = new Audio('./assets/yay.wav')
    const looser = new Audio('./assets/looser.wav')
    const success = new Audio('./assets/success.mp3')
    const lost = new Audio('./assets/lost.wav')
    const playerHand = document.querySelector('.player-hand')
    const computerHand = document.querySelector('.computer-hand')

    const startGame = () => {

        const bgm = document.getElementById('bgm')
        bgm.src = './assets/Fluffing-a-Duck.mp3'


        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro')
        const startGameScreen = document.querySelector('.start-game')
        playBtn.addEventListener('click', () => {

            introScreen.classList.add('fadeOut')
            startGameScreen.classList.add('fadeIn')
            bgm.src = ''


        })
    };

    const playMatch = () => {
        const hands = document.querySelectorAll('.hands img')
        const playerChoice = document.querySelectorAll('.buttons button')


        hands.forEach((hand) => {
            hand.addEventListener('animationend', function () {
                this.style.animation = ''
            })
        })

        playerChoice.forEach((playerChoice) => {
            playerChoice.addEventListener('click', function () {

                const computerChoice = ['rock', 'paper', 'scissors']
                const computerChoiceGenerator = Math.floor(Math.random() * (3));
                const computerSelected = computerChoice[computerChoiceGenerator];

                setTimeout(() => {
                    compareGame(this.textContent, computerSelected)
                    updateScore();
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerSelected}.png`
                    setTimeout(() => {
                        handReset()
                    }, 1000);
                   
                }, 2000);
               


                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
                
              


            })
        })
    }
    const handReset = () => {
        playerHand.src = './assets/rock.png';
        computerHand.src = './assets/rock.png';
    }
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        const gameOver = () => {
            const gameOverh1 = document.querySelector('.game-over h1')
            const gameOverText = document.querySelector('.game-over ')
            const startGameScreen = document.querySelector('.start-game')
            console.log("function called");
            if (pScore > cScore) {
                gameOverh1.textContent = "You Win!!"
                success.play();

            } else if (cScore > pScore) {
                gameOverh1.textContent = "You Lose!"
                lost.play()


            }
            startGameScreen.classList.remove("fadeIn")
            setTimeout(() => {
                gameOverText.classList.add("fadeIn")
            }, 1500);

        }

        if (pScore == 5 || cScore == 5) {

            gameOver();
        }



        console.log(pScore, cScore);
    }



    const compareGame = async (playerChoice, computerChoice) => {
        statusText = document.querySelector('.status-text')
        const statusColor = document.getElementById("status-text")

        if (playerChoice === computerChoice) {
            statusText.textContent = "It's a Tie";
            statusColor.style.color = "blue";

            return
        }
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {

                statusText.textContent = "Computer Wins";
                statusColor.style.color = "#fc0303";
                looser.play()
                cScore++;
                return
            }
            else {
                statusText.textContent = "Player Wins";
                statusColor.style.color = "#8cde95";
                yay.play()
                pScore++;
                return
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {

                statusText.textContent = "Computer Wins";
                looser.play()
                statusColor.style.color = "#fc0303";
                cScore++;
                return
            }
            else {
                statusText.textContent = "Player Wins";
                statusColor.style.color = "#8cde95";
                yay.play()
                pScore++;
                return
            }
        }


        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {

                statusText.textContent = "Computer Wins";
                looser.play()
                statusColor.style.color = "#fc0303";
                cScore++;

               

                return
            }
            else {
                statusText.textContent = "Player Wins";
                statusColor.style.color = "#8cde95";
                yay.play()
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
