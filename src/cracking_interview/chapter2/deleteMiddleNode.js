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

export const deleteMiddleMode = (list, deleted) => {
  if (!deleted) return list;
  if (!list) return list;

  // handle first element match
  if (list === deleted) {
    const { next } = list;
    list.next = null;
    return next;
  }

  // handle subsequent element match
  let curr = list;
  while (curr) {
    if (curr.next === deleted) {
      curr.next = deleted.next;
      break;
    }
    curr = curr.next;
  }

  return list;
};
