function solution(A, K) {
    if (A.length === 0) return [];
    if (K === 0) return A;
    const q = [];
    A.forEach((x) => q.push(x));
    
    while (K > 0) {
        q.unshift(q.pop());
        K -= 1;
    }

    return q;
}