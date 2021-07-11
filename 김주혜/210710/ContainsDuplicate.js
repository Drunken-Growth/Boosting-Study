/* LeetCode 217. Contains Duplicate */

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) return true;
    else map.set(nums[i], 1);
  }
  return false;
};
