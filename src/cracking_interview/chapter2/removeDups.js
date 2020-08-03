/**
 * Crack the Coding Interview
 * Chapter 2
 * Problem 1
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */

export const removeDupsFast = list => {
  const hash = {};
  let curr = list;
  while (curr) {
    hash[curr.val] = true;
    let next = curr.next;
    while (next && next.val in hash) {
      next = next.next;
    }
    curr.next = next;
    curr = next;
  }
  return list;
};

export const removeDupsNoHash = list => {
  let curr = list;
  while (curr) {
    let runner = curr;
    while (runner) {
      let next = runner.next;
      while (next && next.val === curr.val) {
        next = next.next;
      }
      runner.next = next;
      runner = runner.next;
    }
    curr = curr.next;
  }
  return list;
};
