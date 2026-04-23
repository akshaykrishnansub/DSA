const map=new Map([['a',1],['b',2],['c',3]]);
map.set('d',4); //used to add items into a map datastructure

console.log(map.has('b')); // returns true if the map has the specified key
console.log(map.delete('a')); // deletes the specified key in the map
map.clear(); //clears all elements in the map

for(let [key,value] of map){
    console.log(`${key},${value}`);
}