// Given an array nums of non-negative integers,
// return an array consisting of all the even elements of nums,
// followed by all the odd elements of nums.

// You may return any answer array that satisfies this condition.

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// 음이아닌 정수 배열이 주어질 때, 짝수먼저 오고 그 뒤에 홀수가 오도록!

var sortArrayByParity = function (nums) {
  return nums
    .filter((el) => el % 2 === 0)
    .concat(...nums.filter((el) => el % 2 === 1));
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2, 4, 3, 1]
// [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
