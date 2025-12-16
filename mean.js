function mean(arr){
    let total=arr.length;
    let sum=0;
    let avg=0;
    for(let i=0;i<total;i++){
        sum=sum+arr[i];
        avg=sum/total;
    }
    return avg;
}

let arr=[1,2,3,4,5,6];
console.log(mean(arr));