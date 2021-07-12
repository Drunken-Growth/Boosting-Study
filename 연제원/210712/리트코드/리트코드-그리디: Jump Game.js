// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

const canJump = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
};

// console.log(canJump([2, 3, 1, 1, 4])); // true
// console.log(canJump([3, 2, 1, 0, 4])); // false;
// console.log(canJump([0])); // true;
// console.log(canJump([1, 1, 1, 0])); // true;
// console.log(canJump([1, 2])); // true;
console.log(canJump([1, 0, 1, 0])); // false;
