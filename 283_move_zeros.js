// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.
//
//
//
// Example 1:
//
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
//
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 插入的位置
  let insertPos = 0;

  // 把所有非零的元素都移動到前面，並且保持相對位置。
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Fill the remaining positions with zeros
  //   insert position 會結束在應該為零的第一個數，因此從insertPos -> 最後一個都會是0。
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
};
