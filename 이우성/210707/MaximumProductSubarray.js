const maxProduct = function (nums) {
  let n = nums.length;
  let max = -11;
  let product = 1;

  for (let i = 0; i < n; i++) {
    product *= nums[i];
    if (max < product) {
      max = product;
    }

    if (nums[i] === 0) product = 1;
  }

  product = 1;

  // 반대로도 확인
  for (let i = n - 1; i > 0; i--) {
    product *= nums[i];
    if (max < product) {
      max = product;
    }

    if (nums[i] === 0) product = 1;
  }

  return max;
};

// console.log([2, 3, -2, 4]) // 6;
// console.log([-2, 3, -4]) // 24;
