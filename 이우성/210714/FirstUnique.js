function solution(A) {
  let hash = {};

  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]] === undefined) {
      hash[A[i]] = [0, i];
    }
    hash[A[i]][0] += 1;
  }

  let number_arr = [];

  for (let key in hash) {
    number_arr.push([...hash[key], key]);
  }
  number_arr = number_arr.filter((v) => v[0] === 1).sort((a, b) => a[1] - b[1]);

  return number_arr.length === 0 ? -1 : Number(number_arr[0][2]);
}

/**
 * 가장 먼저 유니크한 요소를 반환
 * 한 번이라도 중복되면 유니크한 넘버가 아니다.
 * 유니크한 넘버가 없으면 -1을 반환한다.
 */
