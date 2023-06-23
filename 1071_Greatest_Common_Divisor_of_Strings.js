// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  // str1 + str2 = ABABABABAB
  // str2 + str1 = ABABABABAB

  if (str1 + str2 !== str2 + str1) {
    return "";
  }
// step 1 : 如果b的長度是0，直接回傳a
// step 2 : 如果b的長度不是0，a, b互換，第二項取餘數（短除法），目的是為了找到最大公因數的長度
// step 3 : 如果b的長度是0，直接回傳a  
     
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
}

console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
