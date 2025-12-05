function majorityElement(arr){
    let n=arr.length;

    for(let i=0;i<n;i++){
        let count=0;

        for(j=0;j<n;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }

        if(count>n/2){
            return arr[i];  // if majority element is present
        }
    }
    return -1;  // if no majority element is present
    
}

let arr=[7];
console.log(majorityElement(arr));