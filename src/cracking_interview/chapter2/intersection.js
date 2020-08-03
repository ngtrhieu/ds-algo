export const intersection = (list1, list2) => {
  if (!list1 || !list2) return false;

  let length1 = 1;
  let runner1 = list1;
  while (runner1.next) {
    runner1 = runner1.next;
    ++length1;
  }
  let end = runner1;

  let length2 = 1;
  let runner2 = list2;
  while (runner2.next) {
    runner2 = runner2.next;
    ++length2;
  }

  if (end !== runner2) return false;

  runner1 = list1;
  runner2 = list2;
  while (length1 > length2) {
    runner1 = runner1.next;
    length1--;
  }
  while (length1 < length2) {
    runner2 = runner2.next;
    length2--;
  }

  while (runner1 && runner2 && runner1 !== runner2) {
    runner1 = runner1.next;
    runner2 = runner2.next;
  }

  return runner1;
};
