const buttons = document.querySelectorAll('.rps-btn');
const playerScoreDiv = document.getElementById('player-score');
const computerScoreDiv = document.getElementById('computer-score');

const resultDiv = document.createElement('div');
resultDiv.className = 'result-message';
document.querySelector('.body').appendChild(resultDiv);

function getComputerChoice(){
    const comp_choice=["rock", "paper", "scissors"];
    return comp_choice[Math.floor(Math.random()*comp_choice.length)];
}

let humanScore=0;
let computerScore=0;
let roundsPlayed = 0;
const maxRounds = 5;


function playRound(ComputerChoice, HumanChoice){
    switch (HumanChoice) {
        case 'rock':
            if(ComputerChoice=='rock'){
                resultDiv.textContent ="It's a tie!";
            }else if(ComputerChoice=='paper'){
                resultDiv.textContent ='You Lose! Paper Beats Rock';
                return computerScore++;
            }else{
                resultDiv.textContent ='You win! Rock Beats Scissors.';
                return humanScore++;
            }
            break;
        case 'paper':
            if (ComputerChoice=="paper"){
                resultDiv.textContent ="It's a tie.";
            }else if(ComputerChoice=="scissors"){
                resultDiv.textContent ="You Lose! Scissors Beats Paper.";
                return computerScore++;
            }else{
                resultDiv.textContent ="You win! Paper Beats Rock.";
                return humanScore++;
            }
            break;
        case 'scissors':
            if (ComputerChoice=="scissors"){
                resultDiv.textContent ="It's a tie.";
            }else if(ComputerChoice=="rock"){
                resultDiv.textContent ="You Lose! Rock Beats Scissors.";
                return computerScore++;
            }else{
                resultDiv.textContent ="You win! Scissors beats Paper.";
                return humanScore++;
            }
            break;
        default:
            resultDiv.textContent ="Invalid Input. Please Enter Rock, Paper or Scissors.";
            break;
    }
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (roundsPlayed >= maxRounds) return; // Stop accepting input after 5 rounds

    const HumanChoice = button.dataset.choice;
    const ComputerChoice = getComputerChoice();

    playRound(ComputerChoice, HumanChoice);

    playerScoreDiv.textContent = `Player: ${humanScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;

    roundsPlayed++;

    if (roundsPlayed === maxRounds) {
      if (humanScore > computerScore) {
        resultDiv.textContent = `Game Over! You won! Final score: Player ${humanScore} - Computer ${computerScore}`;
      } else if (computerScore > humanScore) {
        resultDiv.textContent = `Game Over! You lost! Final score: Player ${humanScore} - Computer ${computerScore}`;
      } else {
        resultDiv.textContent = `Game Over! It's a tie! Final score: Player ${humanScore} - Computer ${computerScore}`;
      }
    }
  });
});
