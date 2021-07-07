// 문제

// N명의 학생 정보가 있다. 학생 정보는 학생의 이름과 학생의 성적으로 구분된다.
// 각 학생의 이름과 성적 정보가 주어졌을 때 성적이 낮은 순서대로 학생의 이름을 출력하는 프로그램을 작성하시오

function solution(arr) {
  arr.sort((a, b) => a[1] - b[1]);
  return arr.map((el) => el[0]);
}

// 연습
function quick_sort_up(arr) {
  if (arr.length <= 1) {
    return arr;
  }

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

  return quick_sort_up(left).concat(pivot, quick_sort_up(right));
}

// console.log(quick_sort_up([0, 5, 2, 4, 3, 7, 1]));
console.log(
  solution([
    ["홍길동", 95],
    ["이순신", 77],
  ])
); // 이순신 홍길동
