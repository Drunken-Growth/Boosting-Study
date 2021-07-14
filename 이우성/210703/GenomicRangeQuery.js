// 복잡도 O(n * M) / 정답률 62%

function solution(S, P, Q) {
  let answer = [];
  let dnaRange = P.map((el, idx) => [el, Q[idx]]);
  let factors = S.split("").map((v) => nucleotides(v));

  for (let i = 0; i < dnaRange.length; i++) {
    let [start, end] = dnaRange[i];

    if (start === end) {
      answer.push(factors[start]);
    } else if (start !== end && start - end < factors.length - 1) {
      let dna = factors.slice(start, end + 1);
      answer.push(Math.min(...dna));
    } else {
      answer.push(1);
    }
  }

  return answer;
}

function nucleotides(type) {
  if (type === "A") return 1;
  if (type === "C") return 2;
  if (type === "G") return 3;
  if (type === "T") return 4;
}

/**
 * 문제 파악
 * 0. 시간복잡도 여유
 * 1. 뉴클레오타이드 타입 A, C, G, T 는 1, 2, 3, 4 임팩트 인자들을 가지고 있다.
 * 2. 최소한의 인자를 구해라?
 * 3. S = CAGCCTA, P = [2, 5, 0], Q = [4, 5, 6] => return [2, 4, 1]
 * 4. S를 바꾸면, 2, 1, 3, 2, 2, 4, 1
 * 5. P의 n번째 요소와 Q의 n번째 요소를 비교한다.
 * 6. 첫번째는 2와 4인데 이 사이에는 3이 있으므로, G(3)와 C가 포함된다. 그래서 2? 뭔소리지..?
 *  6.1 아마 뉴클레오타이드 타입 2개를 가지고 있기 때문에 2를 반환한게 아닌가 싶다...?
 *  6.2 파파고 => S의 2번째부터 4번째까지 G와 C를 포함하고 있기 때문에 2를 반환
 *  6.3 수정 => 2번째부터 4번째까지 중에서 최소 인자를 반환하는 것임.
 * 7. 두번째는 5와 5인데, 같기 때문에, S에서 유일한 T인 4를 반환??
 * 8. 세번째는 0과 6인데 뉴클레오타이드 타입이 다 포함되어 있으므로 1을 반환
 */

// 복잡도 O(n + M) / 정답률 100%

function solution(S, P, Q) {
  let answer = [];

  for (let i = 0; i < P.length; i++) {
    let dnaRange = S.slice(P[i], Q[i] + 1);

    if (dnaRange.length === 1) {
      answer.push(nucleotides(dnaRange));
    } else {
      if (dnaRange.indexOf("A") !== -1) {
        answer.push(1);
      } else if (dnaRange.indexOf("C") !== -1) {
        answer.push(2);
      } else if (dnaRange.indexOf("G") !== -1) {
        answer.push(3);
      } else if (dnaRange.indexOf("T") !== -1) {
        answer.push(4);
      }
    }
  }

  return answer;
}

function nucleotides(type) {
  if (type === "A") return 1;
  if (type === "C") return 2;
  if (type === "G") return 3;
  if (type === "T") return 4;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
console.log(solution("C", [0], [0])); // [2]
console.log(solution("GT", [0, 0, 1], [0, 1, 1])); //[3, 3, 4]
console.log(solution("TC", [0, 0, 1], [0, 1, 1])); // [4, 2, 2]

/**
 * S = CAGCCTA, P = [2, 5, 0], Q = [4, 5, 6]
 *
 * 수도 코드
 * 0. 시간 복잡도: O(n * m) 미만 => O(n + m) 가능
 * 1. 타입 A, C, G, T는 1, 2, 3, 4를 이룬다.
 * 2. P[i] ~ Q[i] 범위 내에서
 *  2.1 하나만 가지고 있으면 그 문자를 숫자로 바꿔서 반환
 *  2.2 두개 이상을 가지고 있으면 거기서 최소 인자를 반환
 *  2.3 A가 있으면 1을 반환, 또는 전부 다 있을 가능성이 있기 때문에 1을 반환
 *  2.4 C가 있으면 C가 최솟값이니까 2를 반환한다.
 *  2.5 마찬가지로 C가 없는데 G가 있으면 G가 최솟값이다.
 *
 */
