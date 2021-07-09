function solution(numbers) {
  let answer = new Set();
  let numbers_arr = numbers.split("");
  combination(numbers_arr, "");

  // 조합
  function combination(numbers_arr, cur_number) {
    if (numbers_arr.length !== 0) {
      for (let i = 0; i < numbers_arr.length; i++) {
        let temp = [...numbers_arr];
        temp.splice(i, 1);

        let cur_combi = cur_number + numbers_arr[i];
        if (isPrime(Number(cur_combi))) {
          answer.add(Number(cur_combi));
        }

        combination(temp, cur_combi);
      }
    }
  }

  // 소수 판별
  function isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  return answer.size;
}

/*
1. 주어진 숫자로 만들 수 있는 조합을 만든다.
2. 그 조합을 숫자로 바꿔서 소수인지 판별한다.
3. 소수이면 set에 넣고 중복체크를 한다.
4. set 사이즈를 반환한다.
*/
