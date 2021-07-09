// 풀이 1
// 정확성 100% 퍼포먼스 100%
function solution(N) {
    // 1) 약수 구하기
    const result = [];
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            // 2)
            const sum = (i + parseInt(N / i)) * 2;
            result.push(sum);
        }
    }
    // 3) 
    return Math.min(...result);
}


// 1,000,000,000 N은 10억 O(N) 미만 -> 수학적으로 접근
/**
 * 1) 약수의 짝을 구한다. ->  시간 복잡도를 줄인다. 
 * 2) 두 개의 약수를 더하고 * 2 한 값을 result 배열에 담는다.
 * 3) result 배열에서 최솟값을 구해 반환한다.
 */