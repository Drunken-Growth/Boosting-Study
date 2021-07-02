// BFS를 이용 => queue?
// 1. 현재 요소에서 다음 요소로 가는 것을 만족하는 조건을 판단하는 함수 생성 => 1개만 달라야 한다.
// 2. words의 요소중 사용했는 지를 체크하는 함수 생성
// 3. queue의 요소를 [현재 단어, 단계] 형태로 두어 하나씩 끄집어 낸다.
//    3-1. 현재단어 === target인 경우 단계를 리턴
//    3-2. 아닌 경우 다음으로 넘어감 (이때, 방문하지 않은 단어들로 순환!)
function solution(begin, target, words) {
  let answer = 0;

  // words에 포함이 되어있지 않을 땐 바로 리턴
  if (!words.includes(target)) return answer;

  // 1
  function isOneDiff(cur, next) {
    // 현재단어와 다음 단어의 다른 문자 갯수
    let diff = 0;
    for (let i = 0; i < cur.length; i++) {
      // 다를 경우 diff 1추가
      if (cur[i] !== next[i]) diff++;
      if (diff >= 2) return false;
    }

    if (diff === 1) return true;
    else return false;
  }

  // 2
  const check = Array.from({ length: words.length }, () => 0);
  // 3
  const queue = [[begin, 0]];

  while (queue.length > 0) {
    console.log(queue);
    const [from, step] = queue.shift();
    if (from === target) return step;

    for (let i = 0; i < words.length; i++) {
      // 모든 단어들을 순환하면서
      // 현재단어와 하나만 다르고, 방문하지 않은 단어일때 이동
      if (isOneDiff(from, words[i]) && !check[i]) {
        check[i] = 1;
        queue.push([words[i], step + 1]);
      }
    }
  }
  return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
