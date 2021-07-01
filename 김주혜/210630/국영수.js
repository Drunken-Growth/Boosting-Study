/* 백준 국영수 (정렬) */

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [N, ...arr] = input.split("\n");
  N = Number(N);
  arr = arr.map((el) => el.split(" "));
  arr.sort((a, b) => {
    if (a[1] !== b[1]) return Number(b[1]) - Number(a[1]);
    else {
      if (a[2] !== b[2]) return Number(a[2]) - Number(b[2]);
      else {
        if (a[3] !== b[3]) return Number(b[3]) - Number(a[3]);
        else return a[0] - b[0];
      }
    }
  });
  arr.forEach((student) => console.log(student[0]));
}

let input = `12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`;
console.log(solution(input));
