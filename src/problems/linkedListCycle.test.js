import hasCycle from './linkedListCycle';
import { makeLinkedList } from '../data_structures/linkedList';

describe('linkedListCycle', () => {
  test('sample 1', () => {
    const arr = [3, 2, 0, -4];
    const list = makeLinkedList(arr);
    let curr = list;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = list.next;

    expect(hasCycle(list)).toBe(true);
  });

  test('sample 2', () => {
    const arr = [1, 2];
    const list = makeLinkedList(arr);
    let curr = list;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = list;

    expect(hasCycle(list)).toBe(true);
  });

  test('sample 3', () => {
    const arr = [1];
    const list = makeLinkedList(arr);

    expect(hasCycle(list)).toBe(false);
  });

  test('empty', () => {
    expect(hasCycle(makeLinkedList(undefined))).toBe(false);
    expect(hasCycle(makeLinkedList([]))).toBe(false);
  });

  test('no cycle', () => {
    expect(hasCycle(makeLinkedList([1, 2]))).toBe(false);
    expect(hasCycle(makeLinkedList([1, 2, 3]))).toBe(false);
    expect(hasCycle(makeLinkedList([1, 2, 3, 4, 5]))).toBe(false);
  });
});
