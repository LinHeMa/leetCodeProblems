/**
567. Permutation in String
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const neededMap = {};
  for (let i = 0; i < s1.length; i++) {
    neededMap[s1[i]] = (neededMap[s1[i]] || 0) + 1;
  }

  let l = 0,
    r = 0,
    targetLength = s1.length;
  while (r < s2.length) {
    if (neededMap[s2[r]] > 0) {
      targetLength -= 1;
    }
    neededMap[s2[r]] -= 1;

    if (targetLength === 0) return true;

    if (r - l + 1 === s1.length) {
      if (neededMap[s2[l]] >= 0) {
        targetLength += 1;
      }
      neededMap[s2[l]] += 1;
      l++;
    }

    r++;
  }
  return false;
};
console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidbcooo"));
