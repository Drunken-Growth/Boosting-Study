// 1시간30분동안 풀긴풀었는데, 그냥 주먹구구식으로 디버깅하며 될 때까지 조금씩 바꿔가며 풀음....
// ref참고 필요하고 다시 풀어보는 것 필요함

// 문제이해
// 블록의 값은 바로 밑에 붙어있는 두 블록의 합이다.
// 주어진 피라미드 블록을 완성하여, 배열형태로 리턴하라

// 문제 접근
// 1. 전체 배열만들고, 주어진 값 부터 입력하자.
// 2. 배열순회하며, 비어있을 때 로직에 따라 앞에서 부터 넣어주자

// 배열의 길이 = (block.length + block.length+1) / 2
function solution(blocks) {
  const Tri = (n) => (n * (n + 1)) / 2;
  let result = Array(Tri(blocks.length)).fill(null);
  //   [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

  for (let i = 0; i < blocks.length; i++) {
    let [pos, value] = blocks[i];
    result[Tri(i) + pos] = value;
  }
  while (result.includes(null)) {
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== null) continue;
      let [left_parent_idx, right_parent_idx] = [
        get_parentIdx(i),
        get_parentIdx(i) + 1,
      ];
      // i === 3 && console.log([i, result[i]]);
      //   i === 2 && console.log([result[left_parent_idx], result[i - 1]]);
      //   i === 2 && console.log([result[right_parent_idx], result[i + 1]]);
      //   i === 2 && console.log([Tri(get_stage(i) - 1), Tri(get_stage(i))]);
      // i === 3 && console.log([rightIdx, right_parent_idx]);
      if (
        result[left_parent_idx] !== null &&
        result[i - 1] !== null &&
        i - 1 >= Tri(get_stage(i) - 1)
      ) {
        result[i] = result[left_parent_idx] - result[i - 1];
      } else if (
        result[right_parent_idx] !== null &&
        result[i + 1] !== null &&
        i + 1 <= Tri(get_stage(i))
      ) {
        result[i] = result[right_parent_idx] - result[i + 1];
      }
    }
  }
  function get_stage(idx) {
    let stage = 1;
    while (idx - stage >= 0) {
      idx -= stage;
      stage++;
    }
    return stage;
  }
  function get_parentIdx(right_idx) {
    return right_idx - get_stage(right_idx);
  }
  return result;
}

console.log(
  solution([
    [0, 50],
    [0, 22],
    [2, 10],
    [1, 4],
    [4, -13],
  ])
  // [50,22,28,4,18,10,0,4,14,-4,1,-1, 5, 9 ,- 13]
);
console.log(
  solution([
    [0, 92],
    [1, 20],
    [2, 11],
    [1, -81],
    [3, 98],
  ])
);
//[92, 72, 20, 63, 9, 11, 144, -81, 90, -79,217, -73, -8, 98, -177]
