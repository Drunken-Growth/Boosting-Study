
// 풀이 1 
// 정확성 100%, 시간 복잡도 0%

function solution(A, B, K) {
    const arr = [];
    for (let i = A; i <= B; i++) {
        arr.push(i);
    }
    return arr.filter((x) => x % K === 0).length;
}

/*
    1) A, B의 사이에 있는 수에서 2로 mod 값이 0이 되는 것을 도출하는 문제 
    2) A, B 사이에 있는 값을 모두 삽입하고, 2로 나누어 지는지 확인한다. 

    제한 사항) 
    * A ≤ B
 */


// 풀이 2 
// 정확성 100% 효율성 100% 
function solution(A, B, K) {
    const a = Math.floor(A / K);
    const b = Math.floor(B / K);
    let cnt = 0; // 겹치는 수 
    if (A % K === 0) cnt += 1;
    return b - a + cnt;
}

/*
    1) 제한사항이 2,000,000,000 이기 때문에 특정 알고리즘 또는 수학적 풀이가 필요하다.
    2) 우선 순위큐, 이분 탐색, DP, 해시, 투 포인터, 수학적 풀이
    3) 문제에는 특정 알고리즘 보다는 수학적 풀이로 해결하는 것이 맞는것 같다.

    ---
    문제 해결)
    1. A, B를 K로 나눈 몫은 0 ~ A, 0 ~ B 사이에서 K로 나눠 떨어지는 수의 개수이다.
    2. A와 B가 몫이 겹칠수 있다.
    3. 겹치는 수를 제거 해준다. 
*/