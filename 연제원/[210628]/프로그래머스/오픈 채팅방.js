// 1. 각 단어를 split => 1번째 = 상태, 2번째 = id, 3번째 = 닉네임
// 2. 닉네임과 아이디의 상태를 객체로 저장한다. key = id, value = 닉네임
// 3. 상태에 따라 정답 배열에 값을 추가
function solution(record) {
  let answer = [];
  // 1
  const arr = record.map((el) => el.split(" "));
  console.log(arr);

  // 2
  let nickname = {};
  for (let x of arr) {
    if (x.length === 3) {
      nickname[x[1]] = x[2];
    }
  }

  // 3
  for (let x of arr) {
    if (x[0] === "Enter") {
      answer.push(`${nickname[x[1]]}님이 들어왔습니다.`);
    } else if (x[0] === "Leave") {
      answer.push(`${nickname[x[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
