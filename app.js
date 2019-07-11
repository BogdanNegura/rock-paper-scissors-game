const game = () => {
    let pScore = 0;
    let cScore = 0;


    // start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match  = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option => {
            option.addEventListener("click", function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //  here is where we call compare hands


                // Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                compareHands = `./assets/${computerChoice}.png`;

            });
        });
    };

    const compareHands = (playerChoice, computerChoice) =>{
        // update Text
        const winner = document.querySelector('.winner');
        // checking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'it is a tie';
            return;
        }
        // Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins'
                return;
            }
        }

        // Check for Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins'
                return;
            }else{
                winner.textContent = 'Player Wins'
                return;
            }
        }
        // Check for Scissors
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins'
                return;
            }
        }
    };

    // is call all the inner funtion
    startGame();
    playMatch();
};

// start the game funtion
game();