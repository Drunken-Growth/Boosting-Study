const lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let answer = [];
  let sub_str = "";

  for (let i = 0; i < s.length; i++) {
    if (sub_str.includes(s[i])) {
      sub_str = sub_str.slice(sub_str.indexOf(s[i]) + 1);
    }
    sub_str += s[i];
    answer.push(sub_str.length);
  }

  return Math.max(...answer);
};

/*
순서에 상관 없이 똑같은 문자열이 나오면 초기화
*/
