function solution(record) {
  let users = new Map();
  let messages = [];
  let result = [];

  record.forEach((el) => {
    let info = el.split(" ");
    if (info[0] === "Enter" || info[0] === "Leave") {
      messages.push([info[1], info[0]]);
    }
    if (info[0] === "Enter" || info[0] === "Change") {
      users.set(info[1], info[2]);
    }
  });

  messages.forEach((message) => {
    if (message[1] === "Enter") {
      result.push(`${users.get(message[0])}님이 들어왔습니다.`);
    } else {
      result.push(`${users.get(message[0])}님이 나갔습니다.`);
    }
  });
  return result;
}
