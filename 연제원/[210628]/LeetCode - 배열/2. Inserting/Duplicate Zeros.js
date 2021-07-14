// Given a fixed length array arr of integers,
// duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place,
// do not return anything from your function.

// 정수 배열이 주어질 때, 0이 나오면 0을 복제 후 나머지 요소들을 오른쪽으로 이동시킨다.
// 이 때 배열의 크기는 고정

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// [1,0,0,2,3,0,0,4]

// Input: [1,2,3]
// Output: null
// [1,2,3]

// var duplicateZeros = function (arr) {
//   const N = arr.length;
//   const answer = [];

//   while (answer.length < N) {
//     const pick = arr.shift();
//     if (pick === 0) {
//       answer.push(0);
//       answer.push(0);
//     } else {
//       answer.push(pick);
//     }
//   }

//   arr = answer;
// };

var duplicateZeros = function (arr) {
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) {
      for (let j = N - 1; j >= i + 1; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); // null
console.log(duplicateZeros([1, 2, 3])); // null
