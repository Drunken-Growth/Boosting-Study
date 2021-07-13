// 문제이해,
// line1에서 line2가 존재하는 경우의 수를 리턴 line2 =bbb 일때 각 문자열 사이의 빈공간이 일정하게 들어갈수 있다.
// ex) line2 = abc 라면 abc, a_b_c, a__b__c, a___b___c, ... 을 모두 찾으면 된다.

// 문제 접근
// line2가 존재하기 위해서는 line2의 첫문자가 line1안에 존재해야한다.
// line1에서 line2의 첫글자를 발견하였을 때, 연속된문자열,1칸띈문자열, 2칸띈문자열,.. 을 모두 조사하여 line2와 일치할 때 cnt++

// 문제풀이
// 1. line1을 순회하서 line2의 첫글자와 일치할 때를 찾는다.
// 2. 일치하면 그 때 아후의 글자를 가지고, checkStr()을 시작한다.
// 2.1 checkStr (각idx에서 연속될때,1칸뛸때, 2칸뛸떄...를 검사) 남은길이가 검사해야할 길이 보다 작다면 검사멈춤

function solution(line1, line2) {
  let result = 0;
  for (let i = 0; i < line1.length; i++) {
    if (line1[i] === line2[0]) {
      let curStr = line1.slice(i);
      checkStr(i, curStr);
    }
  }
  return result;

  function checkStr(curIdx, curStr) {
    console.log(["curIdx", curIdx, "curStr", curStr]);
    let gap = 1;
    let checkLength = 0;

    while (checkLength <= curStr.length) {
      let str = line1[curIdx];
      for (let i = 1; i < line2.length; i++) {
        str += line1[curIdx + gap * i];
      }
      if (str === line2) {
        console.log([gap, checkLength]);
        result++;
      }
      gap += 1;
      checkLength = line2.length + (line2.length - 1) * (gap - 1);
    }
  }
}

console.log(solution("abbbcbbb", "bbb")); //4
console.log(solution("abcabcabc", "abc")); //4
console.log(solution("abacaba", "acb")); //0
