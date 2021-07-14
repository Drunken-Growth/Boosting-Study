let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function quick_sort(arr, start, end) {
  if (start >= end) return;

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= end && arr[left] < arr[pivot]) {
      left++;
    }
    while (right > start && arr[right] >= arr[pivot]) {
      right--;
    }
    if (left > right) [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    else [arr[right], arr[left]] = [arr[left], arr[right]];

    quick_sort(arr, start, right - 1);
    quick_sort(arr, right + 1, end);
  }
  console.log(arr);
  return arr;
}

console.log(quick_sort(arr, 0, arr.length - 1));
