// 문제이해
// peak값의 idx를 리턴하는 문제 (peak값은 양옆의 수보다 큰 숫자를 의미한다.)

// 문제접근
// O(logN) 으로 짜는 것이 포인트
// logN인지 모르겠지만, N의 범위가 1000임을 감안해서, nums를 순회하며 하나의 peak이라도 발견하는 순간 바로 리턴하도록 함
// 최악의경우 O(N)..

// 문제풀이
// nums를 순회하며, max값을 기록한다.
// (조건에 의해 nums[i] !== nums[i+1]이므로) 현재수는 이전 수보다 커서 max를 갱신하거나, 앞의 수보다 작을 수 밖에 없다.
// 현재수가 max를 갱신하지 못한다면 그 전의 max값은 peak값이 된다.

// 1. max초기는 -Infinity (nums의 음수값 존재하므로)
// 2. 순회하며 max값과 비교
// 2.1 크다면 max값 갱신
// 2.2 작다면 그 앞의 값이 peak값이므로 return i-1
// 3. 순회 이후 return 값이 없다면, 계속해서 max값이 갱신된 경우 이므로 마지막 idx 리턴

var findPeakElement = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    else {
      return i - 1;
    }
  }
  return nums.length - 1;
};

console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 1or 5
console.log(findPeakElement([-3638392])); // 0
console.log(findPeakElement([8, 7, 6, 5, 4, 3, 2, 7, 6])); // 0 or 7
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 8
