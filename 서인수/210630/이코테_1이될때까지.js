// N을 K로 나누는 것과 N에서 1을 빼는 두가지 연산만을 반복하여 1을 만드는 연산의 횟수를 구하는 문제

// 접근
// N % K 가 가능한 경우와 아닌 경우에 따라 나누어서 연산처리를 해준다.

// 풀이
// while문으로 N = 1이 될 때 cnt를 반환
// 나누어지는 경우 1) N을 몫으로 바꾸고 2) cnt++
// 나누어지지 않는 경우 1) N에서 1빼주고 2) cnt++

function solution(N, K) {
  let cnt = 0;
  while (true) {
    if (N === 1) break;

    if (N % K === 0) {
      N = parseInt(N / K);
    } else {
      N -= 1;
    }
    cnt++;
  }
  console.log(cnt);
  return cnt;
}

solution(25, 5); // 2
solution(25, 3);
