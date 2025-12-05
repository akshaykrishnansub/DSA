function duplicates(arr){
    //sort the array first
    arr.sort((a,b)=>a-b); //sorting in ascending order

    const ans=[];
    for(let i=0;i<arr.length;i++){

        //compare the current and previous element
        if(arr[i]===arr[i-1]){
            if(ans.length===0||ans[ans.length-1]!==arr[i]){
                ans.push(arr[i]);
            }
        }
    }
    return ans;
}

const arr=[2,3,1,2,3];
const res=duplicates(arr);
console.log(res.join(""));