/* 리트코드 - 406. Queue Reconstruction by Height 
  1. 정렬
    - 기준1. 키순 내림차순
    - 기준2. 인덱스 오름차순
  2. 이미 들어간 애들 = 지금 들어갈 값 이상인 애들
    -> 따라서 해당 인덱스 자리에 끼우기만 하면됨
*/

var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (b[0] !== a[0]) return b[0] - a[0];
    else return a[1] - b[1];
  });
  let arr = [];
  for (let i = 0; i < people.length; i++) {
    let idx = people[i][1];
    arr = [...arr.slice(0, idx), people[i], ...arr.slice(idx)];
  }
  return arr;
};
