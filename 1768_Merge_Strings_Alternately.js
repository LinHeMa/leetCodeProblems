//   Example 1:

//   Input: word1 = "abc", word2 = "pqr"
//   Output: "apbqcr"
//   Explanation: The merged string will be merged as so:
//   word1:  a   b   c
//   word2:    p   q   r
//   merged: a p b q c r

//   Example 2:

//   Input: word1 = "ab", word2 = "pqrs"
//   Output: "apbqrs"
//   Explanation: Notice that as word2 is longer, "rs" is appended to the end.
//   word1:  a   b
//   word2:    p   q   r   s
//   merged: a p b q   r   s

//   Example 3:

//   Input: word1 = "abcd", word2 = "pq"
//   Output: "apbqcd"
//   Explanation: Notice that as word1 is longer, "cd" is appended to the end.
//   word1:  a   b   c   d
//   word2:    p   q
//   merged: a p b q c   d

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  // 把陣列解構成每個character 為一個元素
  let array1 = [...word1];
  let array2 = [...word2];
  let ans = "";
  let i = 0;
  // 取較長的陣列長度為極限
  let len = array1.length > array2.length ? array1.length : array2.length;
  while (i < len) {
    if (array1[i] && array2[i]) {
      ans += array1[i] + array2[i];
    }
    if (!array1[i] && array2[i]) {
      ans += array2[i];
    }
    if (array1[i] && !array2[i]) {
      ans += array1[i];
    }
    if (!array1[i] && !array2[i]) {
      return;
    }
    i++;
  }

  return ans;
};
