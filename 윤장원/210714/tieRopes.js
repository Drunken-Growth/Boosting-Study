function solution(K, A) {
    let sum = 0; 
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        if (sum < K) sum += A[i];
        if (sum >= K) {
            result += 1;
            sum = 0;
        }
    }
    return result;
}