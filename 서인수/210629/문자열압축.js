function solution(s) {
  // 최대 s의 길이의 절반까지만큼 자르는 경우가 가능하다.

  // 문제 접근
  // 특정 알고리즘 보다 4번 예시 하나 직접 해보면서 풀어봄.. 4번: s = "abcabcabcabcdededededede"

  // 1. 외부실행
  // 문자열을 i개 단위로 짜르고 단어를 압축했을 때의 길이를 모두 result에 담고(compress함수로), 최종적으로 result의 최소값을 리턴한다.
  // 1번이라도 압축이 되기 위해서 i의 최대값은 s.length / 2 이다.

  // 2. compress함수 - i개단위로 잘라 압축된 문자열을 만들고, 그 길이를 리턴하는 함수
  // 2-1) i개 단위로 잘라진 문자열 배열 만들기
  // i=6일때 arr = ['abcabc','abcabc', 'dedede','dedede']
  // 2-2) 현재요소와 다음요소가 같을 때 1) cnt++  & continue, 만약 cnt > 1이고 현재요소 !== 다음요소 라면, 1)단어압축값 word에 더해주고(cnt + prev값), 2)cnt초기화
  //      그 외 경우는 현재요소만 word에 더해주고, 현재값 갱신해준다.
  //
  let result = [];

  function compress(length) {
    let arr = [];
    let from = 0;
    let to = length;
    for (let i = 0; i < Math.floor(s.length / length); i++) {
      arr.push(s.slice(from, to));
      from += length;
      to += length;
    }
    arr.push(s.slice(from));
    // console.log(arr)
    let cnt = 1;
    let word = "";
    let prev = arr[0];
    for (let i = 1; i < arr.length + 1; i++) {
      if (prev === arr[i]) {
        cnt++;
        continue;
      }
      if (cnt > 1) {
        word += cnt + prev;
        cnt = 1;
      } else {
        word += prev;
      }
      prev = arr[i];
    }
    // console.log('word:' + word)
    return word.length;
  }

  for (let i = 1; i < s.length / 2 + 1; i++) {
    result.push(compress(i)); // i단위로 잘라져 압축된 문자열 s의 길이반환
  }
  return Math.min(...result);
}
