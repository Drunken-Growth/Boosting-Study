// 문제

// N 개의 수로 이루어진 수열 A1, A2 ~ AN 이 주어진다.
// 수와 수 사이에 끼워넣을 수 있는 N - 1개의 연산자가 주어진다.
// 연산자는 +, -, x, % 로 이루어져 있다.

// 수와 수 사이에 연산자를 하나씩 넣어, 수식을 만들 수 있는데 이때 주어진 수의 순서를 바꾸면 안된다.

// 식의 계산은 연산자 우선순위를 무시하고 앞에서 부터 진행한다. 또 나눗셈은 정수 나눗셈으로 몫만 취한다.
// 음수를 양수로 나눌 땐 C++14 기준 => 양수로 바꾼 뒤 몫을 취하고, 그 몫을 음수로 바꾼 것과 같다.

// 최댓값과 최솟값을 리턴

function solution(N, nums, gihos) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let [add, sub, mul, div] = gihos;

  function dfs(i, now) {
    if (i === N) {
      max = Math.max(max, now);
      min = Math.min(min, now);
      return;
    }

    if (add > 0) {
      add--;
      dfs(i + 1, now + nums[i]);
      add++;
    }

    if (sub > 0) {
      sub--;
      dfs(i + 1, now - nums[i]);
      sub++;
    }

    if (mul > 0) {
      mul--;
      dfs(i + 1, now * nums[i]);
      mul++;
    }

    if (div > 0) {
      div--;
      if (now < 0) {
        dfs(i + 1, -parseInt(-now / nums[i]));
      } else {
        dfs(i + 1, parseInt(now / nums[i]));
      }
      div++;
    }
  }
  dfs(1, nums[0]);
  return [max, min];
}

// 마지막 하나 최솟값만 이상함 ㅠ
// function solution(N, nums, gihos) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let min = Number.MAX_SAFE_INTEGER;

//   function dfs(arr, count) {
//     if (count === N - 1) {
//       const result = arr[0];
//       max = Math.max(max, result);
//       min = Math.min(min, result);
//       return;
//     }

//     const a = arr.shift();
//     const b = arr.shift();
//     for (let i = 0; i <= 3; i++) {
//       if (gihos[i] > 0) {
//         gihos[i]--;
//         const calcul = cal(i, a, b);
//         dfs([calcul, ...arr], count + 1);
//         gihos[i]++;
//       }
//     }
//   }
//   dfs(nums, 0);
//   return [max, min];

//   function cal(giho, a, b) {
//     if (giho === 0) {
//       // +
//       return a + b;
//     } else if (giho === 1) {
//       // -
//       return a - b;
//     } else if (giho === 2) {
//       // x
//       return a * b;
//     } else if (giho === 3) {
//       // %
//       if (a < 0) {
//         console.log(a, b);
//         return -parseInt(-a / b);
//       } else {
//         return parseInt(a % b);
//       }
//     }
//   }
// }

console.log(solution(2, [5, 6], [0, 0, 1, 0])); // 30, 30
console.log(solution(3, [3, 4, 5], [1, 0, 1, 0])); // 35, 17
console.log(solution(6, [1, 2, 3, 4, 5, 6], [2, 1, 1, 1])); // 54, -24
