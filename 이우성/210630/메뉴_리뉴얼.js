function solution(orders, course) {
  let answer = [];
  let ordered = {};
  let candidates = {};
  // maxNum[len]: len 길이의 주문 중 가장 많이 시킨 주문의 수
  let maxNum = Array(10 + 1).fill(0);

  // 조합
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];

      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  for (let i = 0; i < orders.length; i++) {
    const sorted = orders[i].split("").sort();

    for (let c = 0; c < course.length; c++) {
      const tLen = course[c];
      createSet(sorted, 0, tLen, "");
    }
  }

  const launched = Object.keys(candidates).filter((food) => {
    return maxNum[food.length] === candidates[food];
  });

  return launched.sort();
}

/*
이전 주문 중 가장 많이 '함께' 주문한 메뉴로 코스 메뉴 구성
최소 2가지 이상
코스 메뉴를 구성하는 각 단품 메뉴(조합)는 최소 2명 이상이 시켰어야 함

20명의 사람이 각각 최대 10개씩 주문
2^10 = 1024
1024 * 20 = 20,480

1. 각 사람마다 시킨 메뉴를 가지고 모든 조합을 생성
2. 조합을 만들때마다 카운트를 한다.
3. 20,480을 조회하면서 카운트가 2 이상인 것을 고려한다.
4. course에 있는 길이만 만들면 된다.
5. N개가 주어졌을 때 M개만 뽑아서 조합을 만들 수 있는지?
*/
