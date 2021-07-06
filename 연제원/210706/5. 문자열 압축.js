// 문제
// 압축할 문자열 s가 매개변수로 주어질 때, 1개 이상 단위러 문자열을 잘라 압축하여 표현한 문자열 중
// 가장 짧은 것의 길이를 return 하시오

// 제한
// s의 길이는 1이상 1000이하
// s는 알파벳 소문자로만 이루어져 있다.

function solution(s) {
  let answer = s;

  for (let i = 1; i <= s.length / 2; i++) {
    let tmp = "";
    let cut = s.slice(0, i);
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      const str = s.slice(j, j + i);
      if (str === cut) {
        count++;
      } else {
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

    if (answer.length > tmp.length) {
      answer = tmp;
    }
  }

  return answer.length;
}

// --------------------------------------------------------------
function solution(S) {
  let answer = S.length;
  for (let i = 1; i <= S.length / 2; i++) {
    answer = Math.min(answer, str_length(S, i));
  }

  return answer;
}

function str_length(S, comp_num) {
  let str = "";
  let count = 1;
  let prev_str = S.slice(0, comp_num);

  for (let i = comp_num; i < S.length; i += comp_num) {
    const cur_str = S.slice(i, i + comp_num);
    if (prev_str === cur_str) {
      count++;
      continue;
    }
    // 전 단어와 다를 경우
    else {
      if (count === 1) {
        str += prev_str;
      } else {
        str += count + prev_str;
        count = 1;
      }
      prev_str = cur_str;
    }
  }

  // 전 단어와 같다면 압축 진행
  if (count === 1) {
    str += prev_str;
  } else {
    str += count + prev_str;
    count = 1;
  }

  // return str.length;
  return str.length;
}

// console.log(str_length("aabbaccc", 1)); // 2a2ba3c
// console.log(str_length("abcabcabcabcdededededede", 6)); // 2abcabc3dede

console.log(solution("aabbaccc")); // 7 (2a2ba3c)
console.log(solution("ababcdcdababcdcd")); // 9 (2ababcdcd)
console.log(solution("abcabcdede")); // 8 (2abcdede)
console.log(solution("abcabcabcabcdededededede")); // 14 (cabcabc3dede)
console.log(solution("xababcdcdababcdcd")); // 17 (xababcdcdababcdcd) => 제일 앞부터 정해진 길이만큼 잘라야 하므로 불가
