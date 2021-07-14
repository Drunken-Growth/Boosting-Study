// 문제
// 숫자 n, k가 주어진다.
// => n을 k번 반복해서
// super digit을 만들어라 (각 자릿수를 계속 더해서 한 자리 수가 될 때 까지.)

// 숫자 겁나 크면 실패? => 수정
function superDigit(n, k) {
  // Write your code here
  let num_to_str = "" + n;
  let answer = n;

  function recur(str) {
    let str_to_num = 0;
    for (let i = 0; i < str.length; i++) {
      str_to_num += Number(str[i]);
    }

    // 1 digit
    if (str_to_num % 10 === str_to_num) {
      answer = str_to_num;
    } else {
      recur("" + str_to_num);
    }
  }

  recur(num_to_str);
  if (k === 1) {
    return answer;
  } else {
    // num_to_str;
    recur("" + answer * k);
  }
  return answer;
}

console.log(superDigit(148, 3)); // 3
console.log(superDigit(9875, 4)); // 8
console.log(superDigit(123, 3)); // 9
