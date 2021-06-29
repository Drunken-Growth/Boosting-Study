// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Input: nums = [1,1]
// Output: [2]

// 배열이 주어지면 그 범위안에 없는 숫자들을 배열로 리턴

// // 시간복잡도가 크다!
// var findDisappearedNumbers = function (nums) {
//   const N = nums.length;
//   const answer = [];

//   for (let i = 1; i <= N; i++) {
//     if (!nums.includes(i)) answer.push(i);
//   }

//   return answer;
// };

var findDisappearedNumbers = function (nums) {
  const N = nums.length;
  const arr = [];

  for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
  }

  // 이렇게 하면 기존 nums배열에 있는 값들만 0으로 할당
  for (let i = 0; i < N; i++) {
    arr[nums[i] - 1] = 0;
  }

  return arr.filter((el) => el > 0);
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers([1, 1])); // [2]
