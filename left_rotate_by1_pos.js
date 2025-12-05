//Version-1 using shift and push method

let arr = [1, 2, 3, 4, 5];
console.log("Original Array", arr);

function leftRotateByOnePos(arr) {
  //check for empty array condition
  if (arr.length === 0) {
    return arr;
  }

  let first = arr.shift();
  arr.push(first);

  return arr;
}

arr = leftRotateByOnePos(arr);
console.log("Array after rotation", arr);
