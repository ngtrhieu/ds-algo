/**
 * Crack the Coding Interview
 * Chapter 2
 * Problem 4
 * Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater
 * than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x
 * (see below).The partition element x can appear anywhere in the "right partition"; it does not need to appear between
 * the left and right partitions.
 */

export const partition = (list, pivot) => {
  if (!list) return list;

  let last = list;
  while (last.next) {
    last = last.next;
  }

  [last.val, pivot.val] = [pivot.val, last.val];

  let i = list;
  let j = list;
  while (j) {
    if (j.val < last.val) {
      [i.val, j.val] = [j.val, i.val];
      i = i.next;
    }
    j = j.next;
  }

  [i.val, last.val] = [last.val, i.val];

  return list;
};
