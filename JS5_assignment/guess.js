const max=prompt("Enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess a number")
let count=1;
while(true){
    if(guess=='quit'){
        console.log("You are out");
        break;
    }
    else if(guess==random){
        console.log("You are right! Congrats! random no. was: ",guess);
        console.log(`Guessed in ${count}th try`);
        break;
    }else if(guess<random){
        guess=prompt("Your guess was too small . Please try again");
        count+=1
    }else{
        guess=prompt("Your guess was wrong. Please try some smaller number");
        count+=1;
    }
}

