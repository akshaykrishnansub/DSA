function duplicate(arr){
    let n=arr.length;
    const freq=Array(n+1).fill(0);
    const ans=[]; //array in which duplicates are stored

    //count the frequencies
    for(let num of arr){
        freq[num]++;
    }

    for(let i=1;i<=n;i++){
        if(freq[i]===2){
            ans.push(i)
        }
    }
    return ans;
}

const arr=[2,3,1,2,3,2];
const res=duplicate(arr);
console.log(res.join(" "));