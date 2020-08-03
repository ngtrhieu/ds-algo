/**
 * Crack the Coding Interview
 * Chapter 2
 * Problem 2
 * Implement an algorithm to find the kth to last element of a singly linked list.
 */

export const kthToLast = (head, k) => {
  let curr = head;
  let front = curr;

  for (let i = 0; i < k - 1; ++i) {
    front = front && front.next;
  }
  if (!front) return null;

  while (front.next) {
    curr = curr.next;
    front = front.next;
  }

  return curr.val;
};
