// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:

// Input: arr = [1,2]
// Output: false

// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let hashMap = new Map();
  let set = new Set();
  let ans;
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap.get(arr[i])) {
      hashMap.set(arr[i], 1);
    } else {
      hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    }
  }

  hashMap.forEach((ele) => {
    set.add(ele);
  });

  console.log(set, Array.from(set).length);
  console.log(hashMap, hashMap.values.length);

  return Array.from(set).length === [...hashMap].length;
};

//
// 調整後的解答
//

function uniqueOccurrences(arr) {
  // 創建一個哈希表來計算出現次數
  const countMap = new Map();

  // 計算每個元素的出現次數
  for (let num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  // 檢查出現次數是否為獨一無二的
  const occurrenceSet = new Set(countMap.values());
  //   Set ， Map 都是用size，所以不需要轉換成Array。
  return occurrenceSet.size === countMap.size;
}

uniqueOccurrences([1, 1, 2, 2, 3]);
console.log(uniqueOccurrences([1, 1, 2, 2, 3]));
