function getComputerChoice(){
    comp_choice=Math.floor(Math.random()*3);
    let R="Rock";
    let P="Paper";
    let S="Scissors";
    // console.log(comp_choice);
    if (comp_choice==0){
        return R;
    }else if(comp_choice==1){
        return P;
    }else if(comp_choice==2){
        return S;
    }
}
