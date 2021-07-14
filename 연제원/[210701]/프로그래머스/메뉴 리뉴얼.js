// https://programmers.co.kr/learn/courses/30/lessons/72411

// Input
// orders : 손님들이 주문한 단품메뉴들이 담긴 배열
// course : 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열

// Output
// 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열
// 조건 : 최소 2명이상의 손님으로부터 주문된 단품 메뉴 조합!
// 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성

// 목표 : 단품메뉴 갯수가 주어졌을 때, 손님들 중에 가장 많이 주문한 조합들을 찾자!
// 1. 손님들이 주문한 모든 단품 메뉴를 토대로 단품 갯수에 맞도록 조합을 만들자.
// 2. 손님들이 조합한 메뉴들을 얼만큼 시켰는 지 확인 => 그 중 최대값만 answer에 넣자.

function solution(orders, course) {
  let answer = [];

  const list = {};
  // orders.forEach((order) => {
  //   order.split("").forEach((menu) => {
  //     if (all[menu]) {
  //       all[menu]++;
  //     } else {
  //       all[menu] = 1;
  //     }
  //   });
  // });

  orders.forEach((order) => {
    const orderArr = order.split("").sort();
    // 만들 수 있는 조합 수는 2부터 시작 ~
    for (let i = 2; i <= orderArr.length; i++) {
      // course에 포함되지 않은 메뉴 수는 생각할 필요가 없다.
      if (!course.includes(i)) continue;

      // 현재 손님이 가능한 모든 조합을 구하는 과정
      const orderCombi = getCombi(orderArr, i);
      orderCombi.map((combi) => {
        const str = combi.join("");
        // 이미 다른 손님이 했던 조합이라면 + 1, 아니면 새로 생성
        list[str] = list[str] ? list[str] + 1 : 1;
      });
    }
  });

  // 순환, 접근하기 쉽게 요소를 [key, value]화 시킴
  let listArr = Object.entries(list);
  course.forEach((num) => {
    // course 요소를 기준으로 모든 손님들의 조합을 필터링한다.
    const sonnim = listArr.filter((el) => el[0].length === num && el[1] >= 2);
    // 메뉴화가 가능한 조합들이 있을 경우

    if (sonnim.length > 0) {
      // [[key1, value1] , [key2, value2], [key3, value3] ... ] 형태로 있으므로 value값만 추출해서 최댓값을 찾는다.
      // key는 문자열인 메뉴조합, key.length === course의 요소(메뉴 수)
      // const max = Math.max(...sonnim.map(el => el[1]));
      const max = Math.max(...sonnim.map((el) => el[1]));
      sonnim.forEach((el) => {
        if (el[1] === max) answer.push(el[0]);
      });
    }
  });
  return answer.sort();
}

function getCombi(arr, n) {
  const result = [];
  if (n === 1) return arr.map((el) => [el]);
  arr.forEach((el, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombi(rest, n - 1);
    const attached = combinations.map((combi) => [el, ...combi]);
    result.push(...attached);
  });
  return result;
}

// console.log(getCombi([1, 2, 3, 4, 5], 3));

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"];
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]
