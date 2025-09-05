let country=["Australia", "Germany", "United States of America" ];
function longCountry(country){
    let ansIndex=0;
    for(let i=0;i<country.length;i++){
        let currLen=country[i].length;
        let ansLen=country[ansIndex].length;
        if(currLen>ansLen){
            ansIndex=i;
        }
    }
    return country[ansIndex];
}

console.log(longCountry(country));