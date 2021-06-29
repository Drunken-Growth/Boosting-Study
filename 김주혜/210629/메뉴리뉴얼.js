/* 프로그래머스 - 메뉴리뉴얼 (순열, 정렬)
  1. orders 순회
  2. course 메뉴개수의 조합 생성
  3. 메뉴 개수별 순열 생성
  4. 메뉴 개수별로 가장 많이 주문된 코스순열 result에 push 
*/

function solution(orders, course) {
  let obj = {};
  let result = [];
  orders.forEach((order) => {
    order = reorder(order);
    course.forEach((cNum) => {
      if (!obj[cNum]) obj[cNum] = {};
      aux([], cNum, 0, order);
    });
  });

  for (let cNum in obj) {
    let arr = [];
    for (let key in obj[cNum]) {
      if (obj[cNum][key] >= 2) arr.push([key, obj[cNum][key]]);
    }
    arr
      .sort((a, b) => b[1] - a[1])
      .filter((el) => el[1] === arr[0][1])
      .forEach((menu) => result.push(menu[0]));
  }
  return result.sort();

  function aux(arr, cNum, idx, order) {
    if (arr.length === cNum) {
      if (!obj[cNum][arr.join("")]) obj[cNum][arr.join("")] = 1;
      else obj[cNum][arr.join("")]++;
      return;
    }
    for (let i = idx; i < order.length; i++) {
      if (!arr.includes(order[i])) aux([...arr, order[i]], cNum, i + 1, order);
    }
  }

  function reorder(str) {
    let arr = str.split("");
    return arr.sort().join("");
  }
}
