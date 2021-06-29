// Given an array arr,
// replace every element in that array with the greatest element among the elements to its right,
// and replace the last element with -1.

// After doing so, return the array.

// 배열이 주어지는데, 현재 요소를 오른쪽에 있는 요소들 중 최댓값으로 대체해라. 마지막 요소는 -1로

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Input: arr = [400]
// Output: [-1]

// 이 방식은 시간복잡도 N^2라서 별루
// var replaceElements = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const max = Math.max(...arr.slice(i + 1));
//     arr[i] = max;
//   }
//   arr[arr.length - 1] = -1;
//   return arr;
// };

// 뒤에서부터 비교해나가면 O(N)이 된다.
// 맨 끝자리는 무조건 -1
// i = arr.length - 1부터 시작해서
// 정답 배열의 i - 1을 구할 때 기존 배열 arr[i] 와 정답 배열 answer[i]를 비교해서 큰 값을 넣는다.
var replaceElements = function (arr) {
  const answer = [];
  answer[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    answer[i - 1] = Math.max(arr[i], answer[i]);
  }

  return answer;
};

// answer = [ , , , , , -1];
// arr = [17, 18, 5, 4, 6, 1];

// answer[i - 1 = 4] = Math.max(arr[i = 5] = 1, answer[i = 5] = -1);

// answer = [ , , , , 1, -1];
// arr = [17, 18, 5, 4, 6, 1];

// answer[i - 1 = 3] = Math.max(arr[i = 4] = 6, answer[i = 4] = 1); = 6

// answer = [ , , ,6, 1, -1];
// arr = [17, 18, 5, 4, 6, 1];

// ...

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [18,6,6,6,1,-1]
