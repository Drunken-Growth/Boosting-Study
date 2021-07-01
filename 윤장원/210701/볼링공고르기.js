// 이코테 볼링공고르기 315P 그리디

function solution (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        result += 1;
      }
    }
  }
  return result;
}

let arr1 = [1,3,2,3,2];
let arr2 = [1,5,4,3,2,4,5,2];

solution(arr1);
solution(arr2);