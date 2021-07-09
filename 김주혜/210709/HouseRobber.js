// 리트코드 198. House Robber

var rob = function (nums) {
  if (nums.length <= 2) return Math.max(...nums);
  nums[2] += nums[0];
  for (let i = 3; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 3] + nums[i]);
  }
  return Math.max(...nums);
};
