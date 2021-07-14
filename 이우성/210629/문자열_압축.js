function solution(s) {
  if (s.length === 1) return 1;

  let answer = 0;
  let db = [];

  for (let [i, range] = [1, parseInt(s.length / 2)]; i <= range; i++) {
    let count = 1;
    let str = "";

    for (let j = 0; j < s.length; j += i) {
      let cur = s.substr(j, i);
      let next = s.substr(j + i, i);

      if (cur === next) {
        count += 1;
      } else {
        str = count > 1 ? str + count + cur : str + cur;
        count = 1;
      }
    }
    db.push(str.length);
  }
  // console.log(db);

  return Math.min(...db);
}

/*
0. 길이가 1이면 1을 반환
1. 문자열의 반만 돌아도 최대로 압축할 수 있는 단위를 알 수 있다.
2. 앞에서부터 잘라서 비교했을 때, 만약 압축이 되지 않으면 바로 반환한다.
  2.1 앞에서부터 자른 단위와 그 다음 단위가 같은지 확인
  2.2 같으면 추가, 아니면 패스
3. 1개 단위, 2개 단위, 3개 단위...n개 단위로 계속 늘려가면서 다 돌거나, 압축이 안될 때까지 단위를 나눈다.
4. 압축이 되면 count + str을 하고, 그렇지 않으면 Str만 보낸다.
5. 단위 별로 압축한 문자열을 빈 배열에 넣고 가장 짧은 문자열의 길이를 반환한다.
6. substr은 start부터 두번째 인자의 개수 만큼 가져오겠다는 뜻.
*/
