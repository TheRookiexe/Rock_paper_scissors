function getComputerChoice(){
    const comp_choice=["rock", "paper", "scissors"];
    return comp_choice[Math.floor(Math.random()*comp_choice.length)];
}
// console.log(getComputerChoice())

function getHumanChoice(){
    let users_Choice=prompt("Enter your choice (Rock, Paper, Scissors): ").toLowerCase();
    return users_Choice;
}
// console.log(getHumanChoice())

let humanScore=0;
let computerScore=0;

function playRound(ComputerChoice, HumanChoice){
    switch (HumanChoice) {
        case 'rock':
            if(ComputerChoice=='rock'){
                console.log("It's a tie!");
            }else if(ComputerChoice=='paper'){
                console.log('You Lose! Paper Beats Rock');
                return computerScore++;
            }else{
                console.log('You win! Rock Beats Scissors.');
                return humanScore++;
            }
            break;
        case 'paper':
            if (ComputerChoice=="paper"){
                console.log("It's a tie.");
            }else if(ComputerChoice=="scissors"){
                console.log("You Lose! Scissors Beats Paper.");
                return computerScore++;
            }else{
                console.log("You win! Paper Beats Rock.");
                return humanScore++;
            }
            break;
        case 'scissors':
            if (ComputerChoice=="scissors"){
                console.log("It's a tie.")
            }else if(ComputerChoice=="rock"){
                console.log("You Lose! Rock Beats Scissors.")
                return computerScore++;
            }else{
                console.log("You win! Scissors beats Paper.")
                return humanScore++;
            }
            break;
        default:
            console.log("Invalid Input. Please Enter Rock, Paper or Scissors.")
            break;
    }
}


function playRounds(round){
    while(round<5){
    const ComputerChoice=getComputerChoice();
    const HumanChoice=getHumanChoice(); 
    playRound(ComputerChoice,HumanChoice);
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    round++
    }
    console.log('------------------------game Over-----------------------------')
    if (humanScore>computerScore){
        console.log(`You won! Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    }else if (computerScore>humanScore){
        console.log(`You Lost! Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    }else{
        console.log(`It's a tie!`)
    }
}

playRounds(0)

