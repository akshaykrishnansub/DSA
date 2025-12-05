//version2- using for loop

let arr = [1, 2, 3, 4, 5];
console.log("Original Array", arr);

function leftRotateByOnePos(arr) {
  //check for empty array condition
  if (arr.length === 0) {
    return arr;
  }

  first = arr[0]; //assigning the first element

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; //shifting elements left
  }
  arr[arr.length - 1] = first;
  return arr;
}

arr = leftRotateByOnePos(arr);
console.log("Array after rotation", arr);
