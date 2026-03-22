function recursiveBinarySearch(arr,t){
    return search(arr,t,0,arr.length-1);
}

function search(arr,t,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }
    let middleIndex=Math.floor((leftIndex+rightIndex)/2);
    if(t===arr[middleIndex]){
        return middleIndex;
    }
    if(t<arr[middleIndex]){
        return search(arr,t,leftIndex,middleIndex-1);
    }else{
        return search(arr,t,middleIndex+1,rightIndex)
    }
}

console.log(recursiveBinarySearch([1,2,3,5,6],6))