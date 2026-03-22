function linearSearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([5,4,2,4,1],4));