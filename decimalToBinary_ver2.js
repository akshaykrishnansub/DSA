function decimalToBinary(n){
    let bin="";

    while(n>0){
        let bit=n&1;
        bin=bin+bit;
        n=n>>1;
    }
    return bin.split("").reverse().join("");
}

let n=12;
console.log(decimalToBinary(n));