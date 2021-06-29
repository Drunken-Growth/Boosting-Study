// https://app.codility.com/c/run/trainingDWUQXE-232/

function solution(K, A) {
    let result = 0;
    let target = 0;

    // target 변수를 통해 K 보다 작은 경우 더해준다.
    // target이 K 보다 큰 경우 target을 0으로 초기화해준다.
    // 반복문을 통해 현재 인덱스에서 다시 확인한다.
    for (let i = 0; i < A.length; i++) {
        if (target < K) target += A[i];
        if (target >= K) {
            result += 1;
            target = 0;
        }
    }
    return result;
}

/*
    제한 사항)
    배열의 길이는 10만 NlogN 최대 
    1) 먼저 K보다 큰 요소가 있는지 순회한다. 
*/