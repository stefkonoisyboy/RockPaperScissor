let computerWins = 0;
let playerWins = 0;

const resetButton = document.querySelector("#new");
resetButton.addEventListener("click", function(e) {
    location.reload();
    computerWins = 0;
    playerWins = 0;
});

const wonButton = document.querySelector("#won");
wonButton.addEventListener("click", function(e) {
    location.reload();
    computerWins = 0;
    playerWins = 0;
});

const lostButton = document.querySelector("#lost");
lostButton.addEventListener("click", function(e) {
    location.reload();
    computerWins = 0;
    playerWins = 0;
});

let playerSelection;

const buttons = Array.from(document.querySelectorAll(".weapon"));
        buttons.forEach((button) => {
            button.addEventListener("click", function(e) {

                if (computerWins >= 5 || playerWins >= 5) {
                    const headingWithFinalResult = document.querySelector("h2");
                
                    if (computerWins >= 5) {
                        headingWithFinalResult.textContent = `You lost the game by ${computerWins} : ${playerWins}`;
                        $("#modalLost").modal("show");
                    }
                    else {
                        headingWithFinalResult.textContent = `You won the game by ${playerWins} : ${computerWins}`;
                        $("#modalWon").modal("show");
                    }

                    return;
                }

                if (button.id === "rock") {
                    playerSelection = "rock";
                }
                else if (button.id === "paper") {
                    playerSelection = "paper";
                }   
                else {
                    playerSelection = "scissors";
                }

                let computerSelection = computerPlay();
                let resultOfOneRound = playRound(playerSelection, computerSelection);

                if (resultOfOneRound.startsWith("You lose!")) {
                    computerWins++;  
                    const computerSpan = document.querySelector("#computer");             
                    computerSpan.textContent = `Computer: ${computerWins}`;
                }
                else if (resultOfOneRound.startsWith("You win!")) {
                    playerWins++;
                    const playerSpan = document.querySelector("#player");
                    playerSpan.textContent = `Player: ${playerWins}`;
                }

                if (computerWins >= 5 || playerWins >= 5) {
                    const headingWithFinalResult = document.querySelector("h2");
                
                    if (computerWins >= 5) {
                        headingWithFinalResult.textContent = `You lost the game by ${computerWins} : ${playerWins}`;
                        $("#modalLost").modal("show");
                    }
                    else {
                        headingWithFinalResult.textContent = `You won the game by ${playerWins} : ${computerWins}`;
                        $("#modalWon").modal("show");
                    }

                    return;
                }

                const container = document.querySelector("#container");

                const headingWithResultOfOneRound = document.querySelector("h2");
                headingWithResultOfOneRound.textContent = resultOfOneRound;

                let playerIcon = document.querySelector("#playerSelection");

                if (playerIcon === null) {
                    playerIcon = document.createElement("i");
                    playerIcon.setAttribute("id", "playerSelection");
                    playerIcon.classList.add("fas");
                    playerIcon.classList.add("text-center");
                    
                    if (playerSelection === "rock") {
                        playerIcon.classList.add("fa-hand-rock");
                    }
                    else if (playerSelection === "paper") {
                        playerIcon.classList.add("fa-hand-paper");
                    }
                    else if (playerSelection === "scissors") {
                        playerIcon.classList.add("fa-hand-scissors");
                    }

                    container.appendChild(playerIcon);
                }
                else {
                    container.removeChild(playerIcon);

                    playerIcon = document.createElement("i");
                    playerIcon.setAttribute("id", "playerSelection");
                    playerIcon.classList.add("fas");
                    playerIcon.classList.add("text-center");
                    
                    if (playerSelection === "rock") {
                        playerIcon.classList.add("fa-hand-rock");
                    }
                    else if (playerSelection === "paper") {
                        playerIcon.classList.add("fa-hand-paper");
                    }
                    else if (playerSelection === "scissors") {
                        playerIcon.classList.add("fa-hand-scissors");
                    }

                    container.appendChild(playerIcon);
                }

                let computerIcon = document.querySelector("#computerSelection");

                if (computerIcon === null) {
                    computerIcon = document.createElement("i");
                    computerIcon.setAttribute("id", "computerSelection");
                    computerIcon.classList.add("fas");
                    computerIcon.classList.add("text-center");
                    
                    if (computerSelection === "rock") {
                        computerIcon.classList.add("fa-hand-rock");
                    }
                    else if (computerSelection === "paper") {
                        computerIcon.classList.add("fa-hand-paper");
                    }
                    else {
                        computerIcon.classList.add("fa-hand-scissors");
                    }

                    container.appendChild(computerIcon);
                }
                else {
                    container.removeChild(computerIcon);

                    computerIcon = document.createElement("i");
                    computerIcon.setAttribute("id", "computerSelection");
                    computerIcon.classList.add("fas");
                    computerIcon.classList.add("text-center");
                    
                    if (computerSelection === "rock") {
                        computerIcon.classList.add("fa-hand-rock");
                    }
                    else if (computerSelection === "paper") {
                        computerIcon.classList.add("fa-hand-paper");
                    }
                    else {
                        computerIcon.classList.add("fa-hand-scissors");
                    }

                    container.appendChild(computerIcon);
                }
            }); 
        });

function computerPlay() {
    let random = Math.floor(Math.random() * 4);
    let computerSelection;

    if (random === 1) {
        computerSelection = "Rock";
    }
    else if (random === 2) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }

    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Nobody wins! Rock cannot beat rock!";
        }
        else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        }
        else if (computerSelection === "paper") {
            return "Nobody wins! Paper cannot beat paper!";
        }
        else {
            return "You lose! Scissors beat paper!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beat paper!";
        }
        else {
            return "Nobody wins! Scissors cannot beat scissors!";
        }
    }
}
