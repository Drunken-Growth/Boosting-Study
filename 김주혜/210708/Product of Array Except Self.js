/* 리트코드 - 238. Product of Array Except Self */

var productExceptSelf = function (nums) {
  let left = [1];
  let right = [1];

  let l = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    left.push(l * nums[i]);
    l *= nums[i];
  }
  let r = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    right.push(r * nums[i]);
    r *= nums[i];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(left[i] * right[nums.length - 1 - i]);
  }
  return ans;
};
