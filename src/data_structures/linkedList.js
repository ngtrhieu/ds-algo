import _ from 'lodash';

export const makeLinkedList = arr => {
  if (!_.isArray(arr)) return undefined;

  let head = null;
  let curr = undefined;
  for (let i = 0; i < arr.length; ++i) {
    if (!head) {
      head = {
        val: arr[i],
        next: null,
      };
      curr = head;
    } else {
      curr.next = {
        val: arr[i],
        next: null,
      };
      curr = curr.next;
    }
  }
  return head;
};

export const linkedListToArray = list => {
  if (list === undefined) return undefined;
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};

export const reverseLinkedList = list => {
  let prev = null;
  let curr = list;

  while (curr) {
    const { next } = curr;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
