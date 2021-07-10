function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }

  return answer;
}

/*
2, 3 => 1 , 2 => 1, 1
1. A와 B는 만나기 전까지 항상 이긴다.
2. Math.ceil을 이용해서 계속 다음라운드로 전진한다.
*/
