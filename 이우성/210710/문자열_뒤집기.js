// 첫번째
function solution(s) {
  s = s.split("1");
  let one = 0;
  let zero = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      one += 1;
    } else {
      zero += 1;
    }
  }

  return one < zero ? one : zero;
}

// 두번째
function solution(s) {
  let one = 0;
  let zero = 0;

  s[0] === "1" ? (one += 1) : (zero += 1);

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (s[i + 1] === "1") {
        one += 1;
      } else {
        zero += 1;
      }
    }
  }

  return Math.min(one, zero);
}

console.log(solution("0001100")); // 1
console.log(solution("10101")); // 2
console.log(solution("10")); // 1
console.log(solution("10011011100")); // 1
console.log(solution("001111111")); // 1

/**
 * 1. 연속된 숫자를 찾는다. => 가장 많이 연속되는 숫자
 * 2.
 *
 */
