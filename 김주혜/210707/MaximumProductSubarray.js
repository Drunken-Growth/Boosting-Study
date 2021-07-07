// 리트코드 152. MaximumProductSubArray
// 카데인 응용

var maxProduct = function (nums) {
  let subs = [[nums[0], nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    let arr = [subs[i - 1][0] * nums[i], subs[i - 1][1] * nums[i], nums[i]];
    subs[i] = [Math.max(...arr), Math.min(...arr)];
  }
  let max = -Infinity;
  for (let i = 0; i < subs.length; i++) {
    max = Math.max(max, subs[i][0], subs[i][1]);
  }
  return max;
};
