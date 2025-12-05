const nums = [];
function secondLargest(nums) {
  let largest = nums[0];
  let slargest = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > largest) {
      slargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > slargest) {
      slargest = nums[i];
    }
  }
}

console.log(secondLargest(nums[(1, 2, 3, 4)]));
