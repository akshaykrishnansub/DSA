let arr = [1, 2, 3, 4, 5, 6];
console.log("Original Array", arr);
let d = 3;

function leftRotateByDPos(arr, d) {
  //check for empty array condition
  if (arr.length === 0) {
    return arr;
  }
  d = d % arr.length; //if d>n

  for (let i = 0; i < d; i++) {
    let first = arr.shift();
    arr.push(first);
  }

  return arr;
}

arr = leftRotateByDPos(arr, d);

console.log("Array after rotation", arr);
