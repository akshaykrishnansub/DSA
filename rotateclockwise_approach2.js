function rotateclockwise(arr,k){
    let n=arr.length;
    k=k%n;

    let res=[];
    for(let i=0;i<n;i++){
        if(i<k){
            res.push(arr[n+i-k]);
        }else{
            res.push(arr[i-k]);
        }
    }

    for(let i=0;i<n;i++){
        arr[i]=res[i];
    }
}

let arr=[1,2,3,4,5,6];
let k=2;
rotateclockwise(arr,k);
console.log(arr.join(" "));