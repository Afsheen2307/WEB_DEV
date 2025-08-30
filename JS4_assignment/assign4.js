let n=prompt("Enter a number for factorial ");
n=parseInt(n);
let pro=1
if(n==0){
    console.log("1");
}else{
    for(let i=1;i<=n;i++){
        pro*=i;
    }console.log(pro);
}
