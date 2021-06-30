function solution(orders, course) {
    const hash = {};
    const result = [];
    
    for (const order of orders) {
        const ordered = order.split('').sort();
        for (const c of course) {
            // 주문에 대한 조합을 구한다.
            let combi = combine(ordered, c);
            combi.forEach((x) => {
                if (!hash[x]) hash[x] = 1;
                else hash[x] += 1;
            })
        }   
    }
    
    let menu = [];
    for (const key in hash) {
        const dish = key.replace(/[,]/gi, '');
        for (const c of course) {
            if (c === dish.length) {
                menu.push([dish, hash[key]]);
            }
        }
    }
    
    for (const c of course) {
        let target = [];
        for (const m of menu) {
            if (c === m[0].length) {
                target.push([m[0], m[1]]);
            }
        }
        
        target.sort((a, b) => b[1] - a[1]);
        
        if (target.length) {
            let maxNum = target[0][1];
            for (let i = 0; i < target.length; i++) {
                const cnt = target[i][1];
                if (cnt === maxNum && cnt >= 2) {
                    result.push(target[i][0]);
                }
            }
        }
    }
    
    return result.sort();
}

// 조합 구하기
const combine = (arr, k) => {
    const result = [];
    const tmp = Array.from({ length: k }, () => 0);
    
    const aux = (L, s) => {
        if (L === k) result.push(tmp.slice());
        else {
            for (let i = s; i < arr.length; i++) {
                tmp[L] = arr[i];
                aux(L + 1, i + 1);
            }
        }
    }
    
    aux(0, 0);
    return result;
}