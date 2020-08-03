/**
 * Crack the Coding Interview
 * Chapter 2
 * Problem 3
 * Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node,
 * not necessarily the exact middle) of a singly linked list, given only access to that node.
 * EXAMPLE
 * Input: the node c from the linked list a - >b- >c - >d - >e- >f
 * Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f
 */

export const deleteMiddleMode = deleted => {
  let prev = null;
  let curr = deleted;
  while (curr) {
    if (curr.next) {
      curr.val = curr.next.val;
    } else {
      curr.val = null;
      curr.next = null;
      if (prev) prev.next = null;
    }
    prev = curr;
    curr = curr.next;
  }
};
