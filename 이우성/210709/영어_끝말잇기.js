function solution(n, words) {
  let failed = 0;
  let check_overlap = {};

  // 중복 체크
  for (let i = 0; i < words.length; i++) {
    let cur_word = words[i];
    let prev_word = words[i - 1];
    if (0 < i && prev_word[prev_word.length - 1] !== cur_word[0]) {
      failed = i + 1;
      break;
    }

    if (check_overlap[words[i]] === undefined) {
      check_overlap[words[i]] = [words[i]];
    } else {
      check_overlap[words[i]].push(words[i]);
      failed = i + 1;
      break;
    }
  }

  // 탈락자가 없으면 0을 반환
  if (failed === 0) {
    return [0, 0];
  }

  const number = failed % n === 0 ? n : failed % n;
  const order = Math.ceil(failed / n);

  return [number, order];
}

/*
1. 먼저 탈락자가 있는지 검사한다.
  1.1 마지막 글자로 사용했는지? => 현재 위치에서 왼쪽 단어를 비교해야 함
  1.2 중복된 단어를 사용했는지?
2. 가장 먼저 탈락한 사람이 있으면 누구인지, 몇번째인지 찾는다.
  2.1 
3. 예외 사항
  3.1 탈락자가 2명이 있을 수 있다. => 우선 탈락자 반환
*/
