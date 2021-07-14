// https://programmers.co.kr/learn/courses/30/lessons/60057

// 문자열이 주어졌을 때, 일정한 단위로 잘라 압축했을 때, 가장 짧은 문자열 길이
// 주의 abcabcdede일때 2abc2de가 최소인 줄 알앗는데 2abcdede임
// => 단위 3개 고정!
// 앞부터 정해진길이만큼 잘려야 한다 => 너무나 다행인 부분..

// 1. 가능한 자르는 단위 i (1 <= i <= s.length / 2)
// 2. 자를 단위가 정해지면 그 안에서 새로 만들어질 단어를 저장할 변수 지정 = tmp
// 3. 추가로 필요한 변수 = 압축할 문자(i개 = cut), 압축된 수(count)
// 4. 자른 단어(cut)과 다음 문자(i개)를 비교한다.
//   4-1. 여기서도 for문을 돌리는 데, 증가하는 단위는 i씩 증가
//   4-2. 자른 단어와 다음 단어가 같다면 => count + 1, cut 유지
//   4-3. 자른 단어와 다음 단어가 다르다면
//       => 1) count가 1일 때, 압축이 한번도 안되었다는 뜻이므로 그대로 tmp에 추가
//       => 2) count가 2이상일 때, 압축이 진행
//       => 공통적으로 다음 단어를 cut으로 새로 할당, count 1로 초기화
// 5. 만들어진 단어와 기존의 단어들을 비교해가며 답에 재할당

function solution(s) {
  let answer = s;

  // 1
  for (let i = 1; i <= s.length / 2; i++) {
    let tmp = ""; // 2
    let cut = s.slice(0, i); // 3
    let count = 1;

    // 4
    for (let j = i; j < s.length; j += i) {
      const str = s.slice(j, j + i);
      // 4-2
      if (str === cut) {
        count++;
      }
      // 4-3
      else {
        if (count === 1) {
          tmp += cut;
        } else {
          tmp += count + cut;
        }
        count = 1;
        cut = str;
      }
    }

    // 마지막에 추가가 안되서 한번 더 해줌!
    if (cut) {
      if (count === 1) {
        tmp += cut;
      } else {
        tmp += count + cut;
      }
    }

    // 5
    if (answer.length > tmp.length) {
      answer = tmp;
    }
  }

  return answer.length;
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17
