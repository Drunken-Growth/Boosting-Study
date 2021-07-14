/* Codility - Socks */

function solution(K, C, D) {
  let pairs = 0;

  // clean 양말 쌍
  let cleans = {};
  for (let i = 0; i < C.length; i++) {
    cleans[C[i]] ? cleans[C[i]]++ : (cleans[C[i]] = 1);
  }

  // clean 중 짝 안맞는 양말 리스트 생성
  let nopairs = [];
  for (let key in cleans) {
    if (cleans[key] > 1) {
      pairs += parseInt(cleans[key] / 2);
      cleans[key] -= parseInt(cleans[key] / 2) * 2;
    }
    if (cleans[key] === 1) nopairs.push(key);
  }

  if (K === 0) return pairs;

  // dirty 양말 쌍
  let dirties = {};
  for (let i = 0; i < D.length; i++) {
    dirties[D[i]] ? dirties[D[i]]++ : (dirties[D[i]] = 1);
  }

  // clean & dirty 짝맞추기
  for (let i = 0; i < nopairs.length; i++) {
    if (dirties[nopairs[i]] > 0) {
      dirties[nopairs[i]]--;
      pairs++;
      K--;
    }
    if (K === 0) return pairs;
  }

  K = parseInt(K / 2) * 2;
  for (let key in dirties) {
    while (dirties[key] > 1 && K > 1) {
      pairs++;
      dirties[key] -= 2;
      K -= 2;
    }
  }
  return pairs;
}
