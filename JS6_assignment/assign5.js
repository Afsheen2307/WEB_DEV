let start=21;
let end=25;
function getRandom(){
    let diff=end-start+1;
    return Math.floor(Math.random()*diff)+start;
}
let generate=getRandom(start,end);
console.log(generate);