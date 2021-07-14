/* LeetCode - 162. Find Peak Element */

var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) return i;
  }
  return 0;
};
