function getComputerChoice(){
    // comp_choice=Math.floor(Math.random()*3);
    // let R="Rock";
    // let P="Paper";
    // let S="Scissors";
    // if (comp_choice==0){
    //     return R;
    // }else if(comp_choice==1){
    //     return P;
    // }else if(comp_choice==2){
    //     return S;
    // }
    /---optimized---/ 
    const comp_choice=["rock", "paper", "scissors"];
    return comp_choice[Math.floor(Math.random()*comp_choice.length)];
}
//console.log(getComputerChoice())

function getHumanChoice(){
    let users_Choice=prompt("Enter your choice (Rock, Paper, Scissors): ").toLowerCase()
    return users_Choice
}
// console.log(getHumanChoice())
