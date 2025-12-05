function decimalToBinary(n){
    let bin=[];

    while(n>0){
        let bit=n%2;
        bin.push(String(bit));
        n=Math.floor(n/2); // getting the digits
    }

    bin.reverse(); //reversing the string
    return bin.join("");

}

let n=15;
console.log(decimalToBinary(n));