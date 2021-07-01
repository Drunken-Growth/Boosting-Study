// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.
// 정수 배열이 주어질때 제곱을 한 후 오름차순(비내림차순)으로 정렬

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function (nums) {
  return nums.map((el) => Math.pow(el, 2)).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
