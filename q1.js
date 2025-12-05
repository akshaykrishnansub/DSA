//create an array and square all elements and sort the squared elements.
var sortedSquare = function squareAndSorted(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  newArr.sort((a, b) => a - b);
  return newArr;
};

console.log(sortedSquare([3, 2, 5, 1]));
