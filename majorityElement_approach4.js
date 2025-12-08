function majorityElement(arr){
    let n=arr.length;
    let candidate=-1;
    let count=0;
    for(const num of arr){
        if(count===0){
            candidate=num;
        }else if(num===candidate){
            count++;
        }else{
            count--;
        }
    }

    //validate the candidate
    count=0;
    for(const num of arr){
        if(num===candidate){
            count++;
        }
    }

    if(count >n/2){
        return candidate;
    }else{
        return -1;
    }
}

let arr=[1,1,2,3,1,5,1,1];
console.log(majorityElement(arr));