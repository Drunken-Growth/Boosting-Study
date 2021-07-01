// leetcode
// https://leetcode.com/problems/letter-case-permutation/

// 문제
// 문자열 s가 주어졌을 때, 모든 문자에 대-소문자 변환 후 배열로 반환

// 순서는 바뀌지 않는다!
// 1. 재귀를 이용 - 인자로 배열, 문자를 사용
//  1.1 - 들어온 배열의 제일 앞의 요소가 문자인지 숫자인지 판단
//  1.2 - 문자라면 재귀함수로 소문자, 대문자화 시켜서 기존 인자로 들어오는 문자와 합쳐 보냄
//  1.3 - 숫자라면 그냥 기존 인자로 들어오는 문자와 합쳐 보냄
//  1.4 - 재귀 종료 조건 = 배열 길이가 0 일때 (or 문자 길이가 기존 문자 길이와 같을 때) 정답 배열에 푸시

// * s를 뽑을 때 shift()를 사용했었는데, 이러면 다른 재귀함수를 돌 때 기존 배열이 건드려져있어서 안됨!
// => a[0]으로 얌전하게 접근

var letterCasePermutation = function (s) {
  let answer = [];
  const arr = s.split("");

  function dfs(a = arr, str = "") {
    // console.log(a, str);
    if (a.length === 0) answer.push(str);
    else {
      const s = a[0];
      if (isNaN(parseInt(s))) {
        dfs(a.slice(1), str + s.toLowerCase());
        dfs(a.slice(1), str + s.toUpperCase());
      } else {
        dfs(a.slice(1), str + s);
      }
    }
  }

  dfs();
  return answer;
};

console.log(letterCasePermutation("a1b2")); // ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation("3z4")); // ["3z4","3Z4"]
console.log(letterCasePermutation("12345")); // "12345"
console.log(letterCasePermutation("0")); // ["0"]
