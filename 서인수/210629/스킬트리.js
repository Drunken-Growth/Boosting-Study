function solution(skill, skill_trees) {
  // 배열형태로 전환
  skill = skill.split("");
  skill_trees = skill_trees.map((el) => el.split(""));

  // 스킬트리 아닌 것 제외하기
  let tree = skill_trees.map((el) => el.filter((el2) => skill.includes(el2)));
  console.log(skill);
  console.log(tree);

  let cnt = 0;
  for (let i = 0; i < tree.length; i++) {
    let isValid = true;
    for (let j = 0; j < tree[i].length; j++) {
      if (skill[j] !== tree[i][j]) {
        isValid = false;
        break;
      }
    }
    // 모든 순회동안 다른 스킬트리가 없다면 cnt++
    isValid && cnt++;
  }
  return cnt;

  /*
  풀이방법
  1.1 skill과 skill트리를 하나의 스킬요소만 가지고 있는 배열로 전환한다.
  1.2 스킬트리는 선행스킬에 포함되지 않는 스킬은 제외하도록 한다.
  "CBD", -> [ 'C', 'B', 'D' ] 
  ["BACDE", "CBADF", "AECB", "BDA"] ->  [ [ 'B', 'C', 'D' ], [ 'C', 'B', 'D' ], [ 'C', 'B' ], [ 'B', 'D' ] ]
  
  2. skill의 i번째와 스킬트리의 i번째 요소가 같지 않다면 isValid = false이고, 스킬트리의 끝까지 같다면 가능한 스킬트리이므로로 cnt++
  최종적으로 cnt를 반환한다.
  */
}
