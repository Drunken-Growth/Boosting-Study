/* 리트코드 - letterCasePermutation
  1. 모든 알파벳 소문자로 변환
    - ex. 'A21b' -> 'a21b'
  2. alphabet이 위치한 index 배열 구하기 (alphabets) 
    - ex. 'a21b' -> [0, 3]
  3. index별 순열 구하기 
    - 해당 위치의 알파벳만 대문자로 변환 예정
    - ex. [[0], [3], [0, 3]]
  4. 순열들을 순회하며, 해당 위치 알파벳을 대문자로 만듦
    - ex. [0] => A21b, [3] => a21B, [0, 3] => A21B
  5. 만들어진 새 문자열을 정답배열에 push
*/

var letterCasePermutation = function (s) {
  s = s.toLowerCase();
  // 알파벳 index 구해서 push
  let alphabets = [];
  for (let i = 0; i < s.length; i++) {
    if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
      alphabets.push(i);
    }
  }
  // 인덱스별 조합 구하기
  let permutations = [];
  for (let i = 1; i <= alphabets.length; i++) {
    makePermutaion([], i, 0);
  }

  // 조합 순회하면서 대문자로 만들기
  let output = [s];
  permutations.forEach((per) => {
    let newStr = s;
    per.forEach((num) => {
      newStr = newStr.substr(0, num) + s[num].toUpperCase() + s.substr(num + 1);
    });
    output.push(newStr);
  });
  return output;

  function makePermutaion(arr, n, idx) {
    if (arr.length === n) {
      permutations.push(arr);
      return;
    }
    for (let i = idx; i < alphabets.length; i++) {
      if (!arr.includes(alphabets[i]))
        makePermutaion([...arr, alphabets[i]], n, i + 1);
    }
  }
};

console.log(letterCasePermutation("0"));
console.log(letterCasePermutation("12345"));
console.log(letterCasePermutation("3z4"));
console.log(letterCasePermutation("a1b2"));
