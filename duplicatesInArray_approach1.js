function duplicates(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        let count=0;

        //check if element is present in the array
        for(let item of ans){
            if(arr[i]===item){
                count++;
                break;
            }
        }
            //check if item is added to the result already
            if(count > 0)continue;

            //check if the array has another item
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]===arr[j]){
                    count++;
                    break;
                }
            }
            if(count>0){
                ans.push(arr[i]);
            }
        }
        return ans;
    }

const arr=[2,3,1,2,3];
const res=duplicates(arr);
console.log(res.join(""));