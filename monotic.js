let arr = [3, 3, 2, 1, 0, -1, -1];
let isInc = true;
let isDec = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isInc = false;
  } else if (arr[i] < arr[i + 1]) {
    isDec = false;
  }
}

if (isDec) {
  console.log("Monotonous Dec");
}
if (isInc) {
  console.log("Monotonous Inc");
}
