//Power of 2, using bitwise operator
function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    return (n & (n-1))===0;
}

console.log(isPowerOfTwo(7));
//Big O is O(1)