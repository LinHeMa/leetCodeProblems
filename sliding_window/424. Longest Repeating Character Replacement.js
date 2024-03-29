/**
424. Longest Repeating Character Replacement
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0;
  let r = 0;
  let max = 0;
  let visited = {};

  while (r < s.length) {
    visited[s[r]] = (visited[s[r]] || 0) + 1;
    max = Math.max(max, visited[s[r]]);
    if (r - l + 1 - max > k) {
      visited[s[l]]--;
      l++;
    }
    r++;
  }
  return max++;
};

console.log(characterReplacement("AABABBA", 1));
