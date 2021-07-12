// very Easy -> no Check

// 문제이해
// A는 오름차순 정렬
// 절대값 씌웠을 때 uniq한 값의 개수 리턴

// 시간복잡도 O(NlogN)까지가능
// 풀이방법
// A를 순회하면서 set 에다가 넣고, set의 길이를 리턴
function solution(A) {
  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    set.add(Math.abs(A[i]));
  }

  return set.size;
}
