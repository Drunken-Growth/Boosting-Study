function solution(A) {
    const hash = {}
    let result = 0;
    
    A.forEach((x) => {
        !hash[x] ? hash[x] = 1 : hash[x] += 1;
    })

    for (const key in hash) {
        if (hash[key] % 2 !== 0) {
            result = Number(key);
        }
    }
    return result;
}