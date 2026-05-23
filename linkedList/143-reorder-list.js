/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  if (!head) return;

  // Step 1: find the mid point
  let fast = head;
  let slow = head;
  while (fast && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Step 2 : reverse the second half

  /**
   *   reverse:
   *
   * step 0:
   * null   1 -> 2 -> 3 -> 4
   * (t)   (s)
   *
   * step 1 (while block: `const temp = second.next;`):
   * null   1 -> 2 -> 3 -> 4
   * (n)   (s)  (t)*
   *
   * step 2 (while block: `second.next = node;`):
   * null <-* 1    2 -> 3 -> 4
   * (n)     (s)  (t)
   *
   * step 3 (while block: `node = second;`):
   * null <- 1    2 -> 3 -> 4
   *        (s)  (t)
   *        (n)*
   *
   * step 4 (while block: `second = temp;`):
   * null <- 1    2 -> 3 -> 4
   *             (t)
   *        (n)  (s)*
   *
   * step 5 (while block: `const temp = second.next;`):
   * null <- 1    2 -> 3 -> 4
   *                  (t)*
   *        (n)  (s)
   */
  let second = slow.next;
  // cut the linked list in half
  slow.next = null;
  //開頭
  let node = null;

  while (second) {
    // temp指向下一顆
    const temp = second.next;
    // 下一顆指向null
    second.next = node;
    // node指向這次操作這一顆（node會一直被下一個node的next指向）
    node = second;
    // (開始處理下一顆)
    second = temp;
  }

  // Step 3: merge 2 list
  let first = head;
  second = node;
  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1.next;
    first = temp1;
    second = temp2;
  }
};
