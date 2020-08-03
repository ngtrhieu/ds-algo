import { kthToLast } from './kthToLast';
import { makeLinkedList } from '../../data_structures/linkedList';

describe('kthToLast', () => {
  test('empty', () => {
    expect(kthToLast(makeLinkedList([]), 1)).toBe(null);
  });

  test('one element', () => {
    expect(kthToLast(makeLinkedList([10]), 1)).toBe(10);
  });

  test('two elements', () => {
    expect(kthToLast(makeLinkedList([9, 10]), 1)).toBe(10);
    expect(kthToLast(makeLinkedList([9, 10]), 2)).toBe(9);
    expect(kthToLast(makeLinkedList([9, 10]), 3)).toBe(null);
    expect(kthToLast(makeLinkedList([9, 10]), 10)).toBe(null);
  });

  test('three elements', () => {
    expect(kthToLast(makeLinkedList([8, 9, 10]), 1)).toBe(10);
    expect(kthToLast(makeLinkedList([8, 9, 10]), 2)).toBe(9);
    expect(kthToLast(makeLinkedList([8, 9, 10]), 3)).toBe(8);
    expect(kthToLast(makeLinkedList([8, 9, 10]), 4)).toBe(null);
    expect(kthToLast(makeLinkedList([8, 9, 10]), 10)).toBe(null);
  });

  test('big array', () => {
    expect(kthToLast(makeLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6)).toBe(
      5,
    );
    expect(kthToLast(makeLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10)).toBe(
      1,
    );
  });
});
