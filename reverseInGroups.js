function reverseInGroups(arr,k){
    let n=arr.length;
    for(let i=0;i<n;i=i+k){
        let left=i;
        let right=Math.min(i+k-1,n-1);
        while(left<right){
            //swap
            [arr[left],arr[right]]=[arr[right],arr[left]];
            left=left+1;
            right=right-1;
        }
    }
    return arr;
}

let arr=[1,2,3,4,5,6,7,8];
let k=3;
let arr1=reverseInGroups(arr,k);
console.log(arr1.join(""));