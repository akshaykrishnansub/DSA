function reverse(arr,start,end){
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}

function rotateclockwise(arr,k){
    let n=arr.length;
    if(n===0) return;

    k=k%n;
    reverse(arr,n-k,n-1);
    reverse(arr,0,n-k-1);
    reverse(arr,0,n-1);
}

let arr=[1,2,3,4,5,6];
let k=2;
rotateclockwise(arr,k);
console.log(arr.join(" "));