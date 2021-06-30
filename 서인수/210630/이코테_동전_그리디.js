//그리디 가장 기본 예제
//동전 거스름 돈 문제. n원의 거스름든을 최소한의 개수의 동전을 사용해 거슬러주는 문제

// 큰 동전 순서대로, 최대개수를 차례대로 도출하면 되므로 그리디 문제이다.

function solution(n, coinList) {
  let cnt = 0;
  for (let i = 0; i < coinList.length; i++) {
    cnt += Math.floor(n / coinList[i]);
    n %= coinList[i];
  }
  console.log(cnt);
  return cnt;
}

solution(1260, [500, 100, 50, 10]); // 6
