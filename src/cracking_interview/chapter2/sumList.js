/**
 * Crack the Coding Interview
 * Chapter 2
 * Problem 5
 * You have two numbers represented by a linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list.
 */

export const sumReversed = (list1, list2) => {
  let result = null;
  let curr = result;

  let carry = 0;
  let i = list1;
  let j = list2;

  while (i || j || carry) {
    const val = (i ? i.val : 0) + (j ? j.val : 0) + carry;
    carry = 0;

    if (val >= 10) {
      val -= 10;
      carry = 1;
    }

    i = i && i.next;
    j = j && j.next;

    if (curr) {
      curr.next = { val };
      curr = curr.next;
    } else {
      result = { val };
      curr = result;
    }
  }

  return result;
};
