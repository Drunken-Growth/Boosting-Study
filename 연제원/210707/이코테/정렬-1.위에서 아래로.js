// 문제

// 하나의 수열에는 다양한 수가 존재한다. 이러한 수는 크기에 상관없이 나열되어 있다.
// 이 수를 큰 수부터 작은 수의 순서로 정렬해야 한다.
// 수열을 내림차순으로 정렬하는 프로그램을 만들어라

// 기본 퀵정렬
// function quick_sort(arr, start = 0, end = arr.length - 1) {
//   // 원소가 1개인 경우
//   if (start >= end) {
//     return;
//   }

//   let pivot = start;
//   let left = start + 1;
//   let right = end;

//   // 피벗을 잡고, left, right가 엇갈릴 때 까지
//   while (left <= right) {
//     // left는 pivot보다 큰 값을 계속 찾는다.
//     while (left <= end && arr[left] <= arr[pivot]) {
//       left++;
//     }
//     // right는 pivot보다 작은 값을 계속 찾는다.
//     while (right >= start + 1 && arr[right] >= arr[pivot]) {
//       right--;
//     }

//     console.log("--------");
//     console.log("엇갈렸을 텐데");
//     console.log(`left ${left}일때 ${arr[left]}`);
//     console.log(`right ${right}일때 ${arr[right]}`);
//     console.log(`pivot ${arr[pivot]}`);
//     console.log(
//       `right === pivot = ${right === pivot}데 우째 바뀜? ${
//         (arr[pivot], arr[right])
//       }`
//     );
//     // 엇갈린 경우 => 작은 데이터(right)와 피벗을 교환한다.
//     if (left > right) {
//       [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
//     }
//     // 엇갈리지 않은 경우 => 작은 데이터(right)와 큰 데이터(left)를 교환한다.
//     else {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//     }
//   }
//   quick_sort(arr, start, right - 1);
//   quick_sort(arr, right + 1, end);
//   return arr;
// }

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // console.log(arr);
  const pivot = [arr[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  return quick_sort(left).concat(pivot, quick_sort(right));
}

// 내림차순으로 바꾸면 정답
function solution(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = [arr[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  return solution(left).concat(pivot, solution(right));
}

function solution2(arr) {
  return arr.sort((a, b) => b - a);
}

// console.log(quick_sort([12, 27, 15])); // [12, 15, 27]
// console.log(quick_sort([5, 7, 9, 0, 3, 1, 6, 2, 4, 8]));
// console.log(solution([1, 2, 3, 4, 5])); // [5,4,3,2,1]
// console.log(solution([15, 27, 12])); // [27 15 12]
console.log(solution2([5, 7, 9, 0, 3, 1, 6, 2, 4, 8]));
