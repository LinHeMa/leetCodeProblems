/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  // 創建兩個集合
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // 在set1中檢查set2不存在的元素，並轉換為陣列，中間使用Set 是因為本身陣列也有重複的可能
  const answer1 = Array.from(new Set(nums1.filter((num) => !set2.has(num))));

  // 在set2中檢查set1不存在的元素，並轉換為陣列
  const answer2 = Array.from(new Set(nums2.filter((num) => !set1.has(num))));

  return [answer1, answer2];
}
