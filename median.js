function median(arr){
    //sorting the array first
    arr.sort((a,b)=>a-b);
    let n=arr.length;
    let result=0;
    if(n%2===0){
        result=Math.floor((arr[n/2]+arr[(n/2)-1])/2);
    }else{
        result=arr[Math.floor(n/2)];
    }
    return result;
}

let arr=[1,2,4,5,6,3];
console.log(median(arr));