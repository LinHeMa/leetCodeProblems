/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tPos = 0;
  let i = 0;
  while (i < s.length && tPos < t.length) {
    if (t.charAt(tPos) === s.charAt(i)) {
      i++;
    }
    tPos++;
  }
  if (i >= s.length) return true;
  return false;
};
//  second solution
var isSubsequence = function (s, t) {
  // Initialize two pointers for s and t
  let sPointer = 0;
  let tPointer = 0;

  // Iterate until the pointers reach the end of s or t
  while (sPointer < s.length && tPointer < t.length) {
    // If the current characters match, move both pointers forward
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
      tPointer++;
    } else {
      // If the characters don't match, move only the pointer for t
      tPointer++;
    }
  }

  // If sPointer has reached the end of s, it means s is a subsequence of t
  return sPointer === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));

// 動態規劃（Dynamic Programming）是一種在計算機編程和算法設計中使用的技巧，通過將複雜問題分解為相互重疊的子問題並重複使用這些子問題的解來解決問題。

// 在動態規劃中，我們不是從頭開始解決問題，而是將其分解為更小的重疊子問題，並僅解決每個子問題一次。我們將子問題的解存儲在表格或數組中，以避免重複計算，並在需要時重複使用預先計算的解。

// 動態規劃的關鍵思想是識別問題的最優子結構性質，這意味著問題的最優解可以從其子問題的最優解構建而來。通過以自底向上或自頂向下的方式解決並存儲子問題的解，我們可以構建出原始問題的最終解。

// 動態規劃對於解決優化問題非常有用，優化問題是指在一組可能的解中尋找最佳或最優解的問題。它常被應用於算法、人工智能、運籌學和經濟學等各個領域。

// 使用動態規劃解決問題通常包括以下步驟：

// 確定最優解的結構特徵。
// 定義每個子問題的值或成本。
// 建立將更大問題的解與其子問題的解相關聯的遞迴關係或遞推關係。
// 確定解決子問題的順序（自頂向下或自底向上）。
// 使用記憶化或表格化的方式實現解，以有效地存儲和檢索子問題的解。
// 從存儲的子問題的解中提取出原始問題的最終解。
// 通過運用動態規劃技巧，我們通常能夠顯著提高解決複雜問題的效率和性能。
