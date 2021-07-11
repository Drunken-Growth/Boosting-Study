function solution(food_times, k) {
  let len = food_times.length;
  let food_infos = food_times
    .map((v, idx) => {
      return { time: v, order: idx + 1 };
    })
    .sort((a, b) => a.time - b.time);
  // console.log("infos", food_infos);

  let eat = 0;
  for (let i = 0; i < len; i++) {
    let food_time = food_infos[i].time;
    let food_over = len - i;

    if (food_over * (food_time - eat) <= k) {
      k -= food_over * (food_time - eat);
      eat = food_time;
    } else {
      let food_order = k === 0 ? 0 : k % food_over;
      let sort_order = food_infos.slice(i).sort((a, b) => a.order - b.order);

      return sort_order[food_order].order;
    }
  }

  return -1;
}

/*
1. {시간, 넘버} 형태로 저장하고 시간이 적게 걸리는 순으로 정렬한다.
*/
