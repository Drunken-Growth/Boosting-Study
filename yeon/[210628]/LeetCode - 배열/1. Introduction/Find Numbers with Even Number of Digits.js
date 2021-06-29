// Given an array nums of integers, return how many of them contain an even number of digits.
// 자릿수가 짝수인 요소의 수를 리턴하라.

// Input: nums = [12,345,2,6,7896]
// Output: 2

// Input: nums = [555,901,482,1771]
// Output: 1

var findNumbers = function (nums) {
  return nums.map((el) => el + "").filter((el) => el.length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1
