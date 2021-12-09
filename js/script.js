// functions
const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })
        // computer Options
        const computerOptions = ['steen', 'papier', 'schaar'];

        options.forEach(option => {
            option.addEventListener("click", function() {
                // computer choice
                const computerNumber = Math.floor(Math.random() *3);  //generate a random number
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
                
                setTimeout(()=>{
                // here is where we call campare hands
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHand.src = `imgs/${this.textContent}.png`;
                computerHand.src = `imgs/${computerChoice}.png`;
                }, 2000)

                //Animation  
                playerHand.style.animation = "shakePlayer 2s ease" ;
                computerHand.style.animation = "shakeComputer 2s ease" ;


            }); 
        });
    };

    // Update Score
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }



    // check function compare hands
    const compareHands = (playerChoise, computerChoice) =>{
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoise === computerChoice){
            winner.textContent = "het is een gelijkspel !";
            return;
        }
        //checking for a rock
        if(playerChoise === 'steen'){
            if(computerChoice === 'schaar'){
                winner.textContent = "Speler heeft gewonen !";
                pScore++;
                updateScore();
                return;
            }else{
               winner.textContent = 'Computer heeft gewonen !' 
               cScore++;
                updateScore();
               return;
            }
        }
        //checking for a paper
        if(playerChoise === 'papier'){
            if(computerChoice === 'schaar'){
                winner.textContent = "Computer heeft gewonen !";
                cScore++;
                updateScore();
                return;
            }else{
               winner.textContent = 'Speler heeft gewonen !' 
               pScore++;
                updateScore();
               return;
            }
        }
        //checking for a schaar
        if(playerChoise === 'schaar'){
            if(computerChoice === 'steen'){
                winner.textContent = "Computer heeft gewonen !";
                cScore++;
                updateScore();
                return;
            }else{
               winner.textContent = 'Speler heeft gewonen !' 
               pScore++;
                updateScore();
               return;
            }
        }
    }



    // is call all the inner function
    startGame();
    playMatch();
};




//start the game function
game();