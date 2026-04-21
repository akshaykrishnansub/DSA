const set=new Set([1,2,3]);

set.add(4);
set.add(4); //ignored as it is a duplicate value
console.log(set.has(3));
set.delete(4); //deletes the item from the set
set.clear(); //clears all items
for(let item of set){
    console.log(item);
}