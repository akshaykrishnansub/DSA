function linearSearch(arr,t){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t){
            result.push(i);
        }
    }
    return result?result:-1;
}

console.log(linearSearch([5,4,2,3,4,1],1))