
// 첫 번째 망한 풀이
// 정확성 100%, 시간 복잡도 time complexity: O(N * M)
// 퍼포먼스 0%
function solution(S, P, Q) {
    const hash = {A: 1, C: 2, G: 3, T: 4};
    const arr = [];
    const result = [];
    for (let i = 0; i < P.length; i++) {
        if (P[i] === Q[i]) {
            arr.push(S[P[i]]);
        } else {
            const rangeS = S.substring(P[i], Q[i] + 1);
            arr.push(rangeS);
        }
    }

    arr.forEach((x) => {
        if (x.length === 1) result.push(hash[x]);
        else {
            let min = [];
            x.split('').forEach((s) => min.push(hash[s]));
            result.push(Math.min(...min));
        }
    })

    return result;
}

/*
    1) 문자열을 S요소와 P요소의 차이만큼 slice한다. 
    2) 그 값을 토대로 확인한다. 

    // 구간 합을 사용해서 처리 못하겠습니다 ㅠㅠ 
*/