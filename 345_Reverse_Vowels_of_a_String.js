/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const strArr = [...s];
  const vowels = ["a", "e", "i", "o", "u"];
  let has = [];
  let i = 0;
  const tempArr = strArr.map((n) => {
    if (vowels.includes(n.toLowerCase())) {
      has.push(n);
      return "_";
    }
    return n;
  });
  has = has.reverse();
  return tempArr.reduce((acc, cur) => {
    if (cur === "_") {
      i++;
      return (acc += has[i - 1]);
    }
    return (acc += cur);
  }, "");
}
console.log(reverseVowels("hello"));

//  2 pointers sol

function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = s.length - 1;
  const chars = s.split("");

  while (left < right) {
    if (!vowels.has(chars[left])) {
      left++;
      continue;
    }
    if (!vowels.has(chars[right])) {
      right--;
      continue;
    }

    // Swap vowels
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}
