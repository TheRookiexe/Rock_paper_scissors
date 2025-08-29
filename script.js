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
    const comp_choice=["Rock", "Paper", "Scissors"];
    return comp_choice[Math.floor(Math.random()*comp_choice.length)];
}
console.log(getComputerChoice())