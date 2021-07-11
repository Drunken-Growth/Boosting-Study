// 떡볶이 떡이 일정하지 않다.

// 높이 H를 지정하면 줄지어진 떡을 한 번에 절단한다.
// 높이가 H보다 긴 떡은 H위의 부분이 잘릴 것이고, 낮은 떡은 잘리지 않는다.

// 19, 14, 10, 17cm 떡이 15cm 절단기로 자르면
// 15, 14, 10, 15가 된다. 잘린 떡의 길이는 4, 0, 0, 2다.
// 손님은 6cm 만큼 가져갈 수 있다.

// 손님이 왔을 때 요청한 총 길이가 M일 때 적어도 M만큼의 떡을 얻기 위해 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성해라

// 이분 검색
// mid를 구하고 각 떡 길이에서 mid를 뺀 값을 합친 값으로 비교
// 원하는 길이보다 길거나 같으면 시작점을 mid+1로 => 알아서 최댓값 구할 수 있음
// 짧으면 끝 점을 mid - 1로

function solution(N, M, dduck) {
  dduck.sort((a, b) => a - b);

  let start = dduck[0];
  let end = dduck[dduck.length - 1];

  let result = 0;
  while (start <= end) {
    let total = 0;
    const mid = parseInt((start + end) / 2);
    for (let x of dduck) {
      if (x > mid) {
        total += x - mid;
      }
    }

    // 길이가 짧으면 더 잘라야 한다
    if (total < M) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  return result;
}

console.log(solution(4, 6, [19, 15, 10, 17])); // 15
