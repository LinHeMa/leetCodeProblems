/**
875. Koko Eating Bananas
Medium
Topics
Companies
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
 */

function minEatingSpeed(piles, h) {
  let left = 1; // 最慢的速度
  let right = Math.max(...piles); // 最快的速度

  // 檢查用給定的速度 k 是否能在 h 小時內吃完所有香蕉
  function canFinish(k) {
    let time = 0;
    for (let p of piles) {
      time += Math.ceil(p / k); // 向上取整，因為即使不到一個小時也要算一個小時
    }
    return time <= h;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canFinish(mid)) {
      right = mid; // 如果可以，嘗試更慢的速度
    } else {
      left = mid + 1; // 如果不行，嘗試更快的速度
    }
  }

  return left; // 找到最小的 k
}

// 測試範例
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 輸出 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 輸出 30
