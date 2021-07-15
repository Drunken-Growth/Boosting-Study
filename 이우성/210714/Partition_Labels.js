const partitionLabels = function (s) {
  let answer = [];
  let left = 0;

  while (left < s.length) {
    let start = left;
    let right = s.lastIndexOf(s[left]);

    while (left < right) {
      right = Math.max(right, s.lastIndexOf(s[left++]));
    }
    left++;
    // console.log(right, left, start);
    answer.push(left - start);
  }

  return answer;
};

/*
반복되는 문자끼리 최대한 많은 그룹으로 만든다.
각 파티션의 문자열 길이를 반환한다.
처음에 나온 문자가 언제 끝나는지 기억한다. 그 뒤로 절대 안나온다고 생각해야함
a로 시작해서 a가 끝날 때까지 사이의 문자들은 a가 끝나도 나오면 안됌.
투포인터, 마지막 인덱스 사용
*/
