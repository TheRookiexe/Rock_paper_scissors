function getComputerChoice(){
    const comp_choice=["rock", "paper", "scissors"];
    return comp_choice[Math.floor(Math.random()*comp_choice.length)];
}
//console.log(getComputerChoice())

function getHumanChoice(){
    let users_Choice=prompt("Enter your choice (Rock, Paper, Scissors): ").toLowerCase()
    return users_Choice
}
// console.log(getHumanChoice())
