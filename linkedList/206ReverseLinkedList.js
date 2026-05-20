/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let node = null;

  while (head) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
};


// test case 1
console.log(reverseList([1, 2, 3, 4, 5]))

/**
 * step 1 : creat a null as end;
 * step 2 : remember next 
 * step 3 : change head.next because we have to change the direction
 * step 4 : change the node to head, so the head is node and the temp is head
 * step 5 : repeat
 * */
