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
  /**
   * step 1 (` let first = head; second = node;`): 
   * first:
   *  1 -> 2 -> 3
   * (f)  
   * 
   * second:
   *  4 -> 5 -> 6
   * (s)  
   * 
   * step 2 (`const temp1 = first.next;
    const temp2 = second.next;`): 
   * first:
   *  1 -> 2 -> 3
   * (f)  (t1)
   * 
   * second:
   *  4 -> 5 -> 6
   * (s)  (t2)
   * 
   * step 3 (`first.next = second; second.next = temp1;`): 
   * first:
   *  1 -> 4 -> 2 -> 3   5 -> 6 
   * (f)  (s)  (t1)     (t2)      
   *   
   * 
   * step 4 (`first = temp1;second = temp2;` 回到first尾巴，second頭): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 3     5 -> 6     
   *           (t1)       (t2) 
   *           (f)        (s)
   * 
   * step 5 (`const temp1 = first.next; const temp2 = second.next;`): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 3     5 -> 6     
   *                (t1)       (t2) 
   *           (f)        (s)
   * 
   * step 6 (`first.next = second; second.next = temp1;`): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 5 ->  3    6      
   *                      (t1) (t2) 
   *           (f)  (s)     
   * 
   * 
   * step 8 (`first = temp1; second = temp2;`): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 5 ->  3    6      
   *                      (t1) (t2) 
   *                      (f)  (s)   
   * 
   * step 9 (`const temp1 = first.next;
    const temp2 = second.next;`): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 5 ->  3 -> null    6 -> null     
   *                            (t1)         (t2) 
   *                      (f)          (s)   
   * 
   * step 10 (`first.next = second; second.next = temp1.next;`): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 5 ->  3 -> 6 -> null  null         
   *                                 (t1)   (t2) 
   *                      (f)  (s)       
   * step 11 (`const temp1 = first.next;
    const temp2 = second.next;`): 
   * first:
   * 
   *  1 -> 4 -> 2 -> 5 ->  3 -> 6 -> null   null         
   *                                 (t1)   (t2) 
   *                                 (f)    (s)                            
   */
  let first = head;
  second = node;
  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    // 這段就是要把second接進去 first與temp1之間
    first.next = second;
    second.next = temp1;
    first = temp1;
    // 然後second就會到後半段的頭
    second = temp2;
  }
};
