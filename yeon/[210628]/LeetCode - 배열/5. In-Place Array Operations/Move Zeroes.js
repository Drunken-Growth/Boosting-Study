// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

// 투포인터 사용?!

var moveZeroes = function (nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      // zeroPointer === i 인 상황은 처음부터 0이 아닌 다른 정수가 이어졌다는 뜻
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 1, 2, 3, 0, 4])); // [1,2,3,4,0,0]
console.log(moveZeroes([1, 2, 3, 0, 4])); // [1,2,3,4,0]
