let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i++) {
  console.log(arr);
  let curVal = arr[i];
  let addIdx = i - 1;
  for (let j = i - 1; j >= 0 && curVal < arr[j]; j--) {
    // 현재값이 이전값보다 작다면 한칸씩 밀어내야한다.
    arr[j + 1] = arr[j];
    addIdx = j;
  }
  arr[addIdx] = curVal;
}

console.log(arr);
