// 이진탐색은 이미 정렬되어 있는 배열에서 빠르게 데이터를 찾아낼 수 있는 방법
// 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 특징
// 시작점과 끝점, 중간점을 반복해서 비교하며 범위를 줄인다.
// 시간복잡도 (O(logN))
// 한 번 시행 시 데이터 개수 절반으로 줄어드므로

//1. 재귀함수 이용

function binary_search() {
  let arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  let target = 4;

  function byRecursion(arr, target, start, end) {
    if (start > end) return; //종료조건
    let mid = Math.floor((start + end) / 2); // mid는 가운데 idx
    if (arr[mid] === target) return mid; // 발견시 idx 리턴

    if (target > arr[mid]) {
      // 타겟이 오른쪽이면 시작값을 mid로 바굼
      return byRecursion(arr, target, mid, end);
    } else {
      // 타겟이 왼쪽에 존재하면 끝값을 가운데로 바꿈
      return byRecursion(arr, target, start, mid);
    }
  }

  console.log(byRecursion(arr, target, 0, arr.length - 1));

  function byWhile(arr, target, left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;

      if (target > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  console.log(byWhile(arr, target, 0, arr.length - 1));
}

binary_search();
