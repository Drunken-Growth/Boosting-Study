let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arr.length - 1; i++) {
  // 1. 가장 작은 요소 찾기
  let min_idx = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_idx]) {
      min_idx = j;
    }
  }
  // 2. 스왑
  let temp = arr[i];
  arr[i] = arr[min_idx];
  arr[min_idx] = temp;
}
console.log("완료");
console.log(arr);
