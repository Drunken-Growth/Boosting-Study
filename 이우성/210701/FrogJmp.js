function solution(X, Y, D) {
  let dist = Y - X;

  return dist % D ? Math.floor(dist / D) + 1 : Math.floor(dist / D);
}

/**
 * 문제: X에서 D만큼 점프를 해서 Y랑 같거나 더 크려면 최소 몇 번 점프해야 하는가?
 * 시간 복잡도: O(log n)
 *
 * 1. 현재 거리에서 Y를 빼면 총 가야하는 거리이다.
 * 2. 여기서 몇 번을 점프해야 Y에 도달하는지 구한다.
 * 3. dist % D 를 했을 때 나머지가 있으면 아직 도달 못했다는 뜻이므로 한 번 더 점프해준다.
 */
