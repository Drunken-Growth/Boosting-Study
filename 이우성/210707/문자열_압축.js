function solution(s) {
  let answer = [];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let count = 1;

    for (let j = 0; j < s.length; j += i) {
      let prev = s.substr(j, i);
      let next = s.substr(j + i, i);

      if (prev === next) {
        count += 1;
      } else {
        str += count > 1 ? count + prev : prev;
        count = 1;
      }
    }

    answer.push(str.length);
  }

  return s.length === 1 ? 1 : Math.min(...answer);
}

/*
0. 효율 100%, 시간 복잡도 O(n^2)
1. 압축은 최대 범위가 절반이니까 반복문은 문자열의 반까지만 돌아준다.
2. 앞에서부터 하나씩 잘라서 비교한다. 만약 2개의 단위가 다 같으면 그다음 3개 단위를 검사한다.
  2.1 단위는 카운트를 한다.
  2.2 문자를 저장하면서 비교한다.
3. 그렇지않으면 반복문을 멈추고 반환한다.
*/
