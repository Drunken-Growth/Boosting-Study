// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// 제곱 후 정렬

var sortedSquares = function (nums) {
  return nums.map((el) => Math.pow(el, 2)).sort((a, b) => a - b);
};
