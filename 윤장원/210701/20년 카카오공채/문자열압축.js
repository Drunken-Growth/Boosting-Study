function solution(s) {
  let answer = 0;
  let repeat = s.length;
  let strArr = [];

  for (let i = 0; i < repeat; i++) {
    let num = i + 1;
    let count = 1;
    let newStr = '';

      for (let j = 0; j < s.length; j = j + num) {
          let curr = s.substring(j, j + num); 
          let next = s.substring(j + num, j + num + num);

          if (curr === next) {
              count += 1;
          } else {
            if (count !== 1) newStr = newStr + count + curr;
            else newStr = newStr + curr;
            count = 1;
          }
      }  
      strArr.push(newStr.length);
  }
    answer = Math.min(...strArr);
    return answer;
}