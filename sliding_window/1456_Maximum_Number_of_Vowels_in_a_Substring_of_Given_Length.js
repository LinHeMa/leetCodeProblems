/**
1456_Maximum_Number_of_Vowels_in_a_Substring_of_Given_Length
Hint
Given a string s and an integer k, return the maximum number of vowel
letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 
Intuition
when it comes to substring, always remember sliding window.

Approach
ex.1. k = 2

step0:
a  e u i o
lr          => a is a vowel, so count + 1, count > ans=0, ans = 1

step1:
a e u i o
l r         => a is counted ignore. e is a vowel. count + 1

step2:

a e u i o
l   r       => everytime we add 1 to r, and we still check is it a valid sliding
window( r - l + 1 < k)

a e u i o
  l r       => so we add 1 to l to adjust the window size, and we have to check
  whether the letter we remove is a vowel, if so , we minus 1 from count.

the point of sliding window is that we can only focus of what we add and what we
remove every step and can ignore the counted part.

Complexity
Time complexity:
O(n)

Space complexity:
O(1)

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
 */
function maxVowels(s, k) {
    var vowel = new Set(["a", "e", "i", "o", "u"]);
    var ans = 0;
    var count = 0;
    var l = 0;
    for (var r = 0; r < s.length; r++) {
        if (vowel.has(s[r])) {
            count += 1;
        }
        if (r - l + 1 > k) {
            if (vowel.has(s[l]))
                count -= 1;
            l++;
        }
        ans = Math.max(ans, count);
    }
    return ans;
}
