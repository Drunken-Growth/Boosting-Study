function solution(N) {
    let result = [];
    let arr = [];
    N = N.toString(2);
    for (let i = 0; i < N.length; i++) {
        if (N[i] === '1') arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i + 1] - arr[i] - 1)
    }

    result = result.filter(v => {
        if (typeof v === 'number') return v;
    });

    return result.length ? Math.max(...result) : 0;
}