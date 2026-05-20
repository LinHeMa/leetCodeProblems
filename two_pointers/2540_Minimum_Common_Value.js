/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] === nums2[pointer2]) {
      return nums1[pointer1];
    }

    if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return -1;
};

/**
 * use 2 pointers method is more efficient
 * if using ES6 Set method, we have to iterate multiple times the whole nums1, nums2
 * first time when create the Set
 * second time when find intersection
 * but using 2 pointers method, we won't have to iterate through whole array.
 */
