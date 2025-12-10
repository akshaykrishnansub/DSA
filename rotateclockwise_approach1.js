// rotate array clockwise using recursion
function rotateclockwise(arr,k){
    if(k===0 || arr.length===0){
        return;
    }

    let n=arr.length;
    let temp=arr[n-1];
    for(let i=n-1;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=temp;
    rotateclockwise(arr,k-1);
}

let arr=[1,2,3,4,5];
let k=4;
rotateclockwise(arr,k);
console.log(arr.join(" "));
