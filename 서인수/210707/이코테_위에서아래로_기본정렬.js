// 문제이해
// 큰수부터로 정렬하여 리턴하는 문제

// 1. N의 개수가 최대 500이고, 최대 N의 수가 100,000 이므로 아무정렬이나 사용해도됨
function solution(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(solution([15, 27, 12])); // [27, 15 , 12]
