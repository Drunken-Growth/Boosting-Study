// Given an array arr of integers,
// check if there exists two integers N and M such
// that N is the double of M ( i.e. N = 2 * M).

// 정수 배열이 주어질 때, 한 요소가 다른 요소의 2배일 때 true, 없으면 false

// Input: arr = [10,2,5,3]
// Output: true

// Input: arr = [7,1,14,11]
// Output: true

// Input: arr = [3,1,7,11]
// Output: false

// var checkIfExist = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== i) {
//         if (arr[i] === 2 * arr[j] || 2 * arr[i] === arr[j]) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };

var checkIfExist = function (arr) {
  return !!arr.filter((el) => arr.includes(el * 2)).length;
};
console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([7, 1, 14, 11])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
