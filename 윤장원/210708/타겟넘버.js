function solution(numbers, target) {
    const N = numbers.length;
    let result = 0;
    const aux = (L, sum) => {
        if (L === N) {
            if (sum === target) result += 1;
            return;
        } else {
            aux(L + 1, sum + numbers[L]);
            aux(L + 1, sum - numbers[L]);
        }
    }
    
    aux(0, 0);
    return result;
}
