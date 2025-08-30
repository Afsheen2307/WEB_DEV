const favMov="avatar";
let guess=prompt("Guess Movie Name: ");
// while((guess!=favMov )&&(guess!='quit')){
//     guess=prompt("Wrong Guess, please try again");
// }

while(guess!=favMov){
    if(guess=='quit'){
        console.log('you quit');
        break;
    }
    guess=prompt("Wrong Guess, please try again");
}
if(guess==favMov){
    console.log('Congrats!');
}else{
    console.log("You Quit");
}