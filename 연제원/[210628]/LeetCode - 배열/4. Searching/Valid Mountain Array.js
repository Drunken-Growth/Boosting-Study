// Given an array of integers arr,
// return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// 오름차순으로 오르고 내림차순으로 내리면 true, 아니면 false;

// Input: arr = [2,1]
// Output: false

// Input: arr = [3,5,5] => 동일해도 false;
// Output: false

// Input: arr = [0,3,2,1]
// Output: true

// var validMountainArray = function (arr) {
//   // 배열의 길이가 3 미만이라면 산 모양이 불가능하므로 false
//   if (arr.length < 3) return false;

//   let start = 0;
//   let end = arr.length - 1;

//   // 처음부터 시작 후 다음 값이 클 때 반복
//   while (arr[start] < arr[start + 1]) {
//     start++;
//   }
//   // 끝부터 시작 후 전 값이 클 때 반복
//   while (arr[end] < arr[end - 1]) {
//     end--;
//   }

//   // start === end 같은 상태에서
//   if (start === end) {
//     // start === 0 은 상승이 없었다는 뜻이므로 false
//     // start === arr.length-1 은 하락이 없었다는 뜻이므로 false
//     if (start === 0 || start === arr.length - 1) return false;

//     return true;
//   }

//   return false;
// };

var validMountainArray = function (arr) {
  let up = false;
  let down = false;

  let idx = 1;

  while (arr[idx] > arr[idx - 1]) {
    idx++;
    up = true;
  }

  if (arr[idx] === arr[idx + 1]) return false;

  while (arr[idx] < arr[idx - 1]) {
    idx++;
    down = true;
  }

  return up && down && idx === arr.length;
};

console.log(validMountainArray([2, 1])); // false;
console.log(validMountainArray([3, 5, 5])); // false;
console.log(validMountainArray([0, 3, 2, 1])); // true;
