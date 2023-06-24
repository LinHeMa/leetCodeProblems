// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
//
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
//
//
//
// Example 1:
//
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:
//
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let odd = true;
  const flowerNum = flowerbed.reduce((accumulator, currentValue, i) => {
    if (currentValue !== 0) {
      if (i % 2 !== 0) {
        odd = false;
      }
    }
    return accumulator + currentValue;
  }, 0);
  if (flowerbed.length % 2 === 0) {
    return flowerbed.length / 2 - flowerNum > n;
  } else {
    if (odd) {
      return Math.ceil(flowerbed.length / 2) - flowerNum >= n;
    }
    return Math.floor(flowerbed.length / 2) - flowerNum >= n;
  }
};
//  原本的想法是想要全部算出來再判斷
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 && // 檢查目前plot是否為empty
      (i === 0 || flowerbed[i - 1] === 0) && // 檢查前一個plot是否為empty 或 此為第一個
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // 檢查下一個plot是否為empty 或 此為最後一個
    ) {
      flowerbed[i] = 1; // important！ the ·flowerbed[i - 1] === 0· 會用到這個判斷
      count++; // 增加可以種植的數量
    }
    //  如果大於可以直接回傳true
    if (count >= n) {
      return true; // Enough flowers have been planted
    }

    i++; // 移動到下一個plot
  }

  return false;
};
canPlaceFlowers([1, 0, 0, 0, 1], 1);
