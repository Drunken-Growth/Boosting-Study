const findPeakElement = function (nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    } else {
      return i - 1;
    }
  }

  return nums.length - 1;
};

/*
이진탐색 문제?
음수부터 시작
*/
