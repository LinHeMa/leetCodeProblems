/**
76. Minimum Window Substring
Hint
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Create an array to store the frequency of characters using their ASCII codes
  const tFreq = new Array(128).fill(0);

  // Calculate the frequency of characters in 't'
  for (let char of t) {
    tFreq[char.charCodeAt()]++;
  }

  // Initialize pointers and variables
  let left = 0;
  let right = 0;
  let minWindow = "";
  let minWindowLength = Infinity;
  let count = t.length;

  // Expand the window to the right
  while (right < s.length) {
    // If the current character in 's' is present in 't', decrease the count
    if (tFreq[s[right].charCodeAt()] > 0) {
      count--;
    }

    // Decrease the frequency of the current character in 'tFreq'
    tFreq[s[right].charCodeAt()]--;
    right++;

    // Contract the window from the left
    while (count === 0) {
      // If the current window is smaller than the minimum window found so far, update the minimum window
      if (right - left < minWindowLength) {
        minWindowLength = right - left;
        minWindow = s.substring(left, right);
      }

      // Increase the frequency of the character at 'left' in 'tFreq'
      tFreq[s[left].charCodeAt()]++;

      // If the frequency of the character at 'left' becomes positive, increase the count
      if (tFreq[s[left].charCodeAt()] > 0) {
        count++;
      }

      left++;
    }
  }

  return minWindow;
};
