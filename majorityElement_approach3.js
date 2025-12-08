function majorityElement(arr){
    let n=arr.length;

    const countMap=new Map();

    for(const num of arr){
        countMap.set(num,(countMap.get(num)||0)+1);

    if(countMap.get(num)>n/2){
        return num;
    }
}
return -1;
}

let arr=[1,1,2,3,1,1];
console.log(majorityElement(arr))