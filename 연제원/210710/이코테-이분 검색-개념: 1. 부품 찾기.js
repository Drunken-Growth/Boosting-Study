// 매장에 부품 N개가 있다.
// 각 부품은 정수인 고유한 번호가있다.
// 손님이 M개 종류의 부품을 대량으로 구매하겠다 했다.
// 가게 안에 부품이 전부 있는지 확인!

// 손님이 요청한 부품 번호 순서대로 확인해 부품이 있으면 yes 없으면 no를 리턴

function solution(N, items, M, buy) {
  const answer = [];
  items.sort((a, b) => a - b);

  for (let x of buy) {
    answer.push(binary_search(items, x));
  }

  return answer;

  function binary_search(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return "NO";
    }
    const mid = parseInt((start + end) / 2);

    if (arr[mid] === target) {
      return "YES";
    } else if (target > arr[mid]) {
      return binary_search(arr, target, mid + 1, end);
    } else {
      return binary_search(arr, target, start, mid - 1);
    }
  }
}

console.log(solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]));
