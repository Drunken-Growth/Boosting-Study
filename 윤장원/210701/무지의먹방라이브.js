function solution(food_times, k) {
    let result = 0;
    let n = food_times.length;
    let num = k;
    
    for (let i = 0; i < k; i++) {
        // 인덱스를 넘어간 경우
        num -= 1;
        if (i >= n) {
            for (let l = i - n; l < food_times.length; l++) {
                if (food_times[l] > 0) {
                    food_times[l] -= 1;
                    if (num === 0) result = l;
                    break;
                }
            }
        } else {
            // 인덱스의 요소값이 있는 경우
            if (food_times[i] > 0) {
                food_times[i] -= 1;
                if (num === 0) result = i;
            } else {
                // 인덱스의 요소값이 없는 경우
                for (let j = 1; j < food_times.length; j++) {
                    if (food_times[i + j] > 0) {
                        food_times[i + j] -= 1;
                        if (num === 0) result = j;
                        break;
                    }
                }
            }
        }
    }
    
    return result - 1
}