function printAllDivisors(n){
    let divisors=[];
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i===0){
            if(n/i===i){
                divisors.push(i);
            }else{
                divisors.push(i);
                divisors.push(n/i);
            }
        }
    }
    return divisors;
}

let n=10;
let divisors=printAllDivisors(n);
for(let divs of divisors){
    console.log(divs + " ");
}