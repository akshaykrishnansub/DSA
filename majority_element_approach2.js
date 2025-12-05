function majorityElement(arr){
    let n=arr.length;
    arr.sort((a,b)=>a-b);

    //potential majority element
    let candidate=arr[Math.floor(n/2)];

    let count=0;
    for(let num of arr){
        if(num===candidate){
            count++;
        }
    }

    if(count > Math.floor(n/2)){
        return candidate;
    }else{
        return -1;
    }
}

let arr=[1,1,2,3,1,1];
console.log(majorityElement(arr));