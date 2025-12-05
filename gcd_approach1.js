function gcd(a,b){
    let result=Math.min(a,b); // calculates gcd
    while(result>0){
        if(a%result===0 && b%result===0){
            break;
        }
        result--;
    }
    return result;
}

let a=60;
let b=36;
console.log(gcd(a,b));