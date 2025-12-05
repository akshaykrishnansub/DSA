function gcd(a,b){
    if(a===0){
        return b;
    }

    if(b===0){
        return a;
    }

    //base condition
    if(a===b){
        return a;
    }

    if(a>b){
        return gcd(a-b,b);
    }else{
        return gcd(a,b-a);
    }
}

let a=60;
let b=36;
console.log(gcd(a,b));