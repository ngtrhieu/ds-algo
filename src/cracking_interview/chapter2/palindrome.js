/**
 * Crack the Coding Interview
 * Chapter 2
 * Problem 6
 * Implement a function to check if a linked list is a palindrome.
 */

export const isPalindrome = list => {
  if (!list) return true;

  let slow = list;
  let fast = list;
  let odd;

  while (true) {
    if (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      odd = !fast.next;
      break;
    }
  }

  let mid = slow;

  let curr = list;
  let stack = [];
  while (true) {
    stack.push(curr.val);
    if (curr === mid) break;
    curr = curr.next;
  }

  curr = odd ? mid : mid.next;
  while (curr) {
    const val = stack.pop();
    if (val !== curr.val) {
      return false;
    }
    curr = curr.next;
  }

  return true;
};
