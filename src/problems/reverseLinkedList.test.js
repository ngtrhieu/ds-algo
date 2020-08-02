import reverse from './reverseLinkedList';
import {
  makeLinkedList,
  linkedListToArray,
} from '../data_structures/linkedList';

describe('reverseLinkedList', () => {
  it('sample test', () => {
    const list = makeLinkedList([1, 2, 3, 4, 5]);
    expect(linkedListToArray(reverse(list))).toEqual([5, 4, 3, 2, 1]);
  });

  it('empty', () => {
    const list = makeLinkedList([]);
    expect(reverse(list)).toBe(null);
  });

  it('one element', () => {
    const list = makeLinkedList([1]);
    expect(reverse(list)).toEqual({
      val: 1,
      next: null,
    });
  });

  it('two elements', () => {
    const list = makeLinkedList([1, 2]);
    expect(reverse(list)).toEqual({
      val: 2,
      next: { val: 1, next: null },
    });
  });

  it('three or more elements', () => {
    const array = [1, 2, 2, 4, -2];
    const list = makeLinkedList(array);
    expect(linkedListToArray(reverse(list))).toEqual(array.reverse());
  });
});
