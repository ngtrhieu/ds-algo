import { removeDupsFast as fast, removeDupsNoHash as slow } from './removeDups';
import {
  makeLinkedList,
  linkedListToArray,
} from '../../data_structures/linkedList';

describe('removeDups', () => {
  test('empty', () => {
    expect(linkedListToArray(fast(makeLinkedList([])))).toEqual([]);
    expect(linkedListToArray(slow(makeLinkedList([])))).toEqual([]);
  });

  test('one elem', () => {
    expect(linkedListToArray(fast(makeLinkedList([0])))).toEqual([0]);
    expect(linkedListToArray(slow(makeLinkedList([0])))).toEqual([0]);
  });

  test('two elems', () => {
    expect(linkedListToArray(fast(makeLinkedList([0, 1])))).toEqual([0, 1]);
    expect(linkedListToArray(slow(makeLinkedList([0, 1])))).toEqual([0, 1]);

    expect(linkedListToArray(fast(makeLinkedList([0, 0])))).toEqual([0]);
    expect(linkedListToArray(slow(makeLinkedList([0, 0])))).toEqual([0]);
  });

  test('series of duplicates', () => {
    expect(
      linkedListToArray(fast(makeLinkedList([0, 0, 0, 0, 0, 0]))),
    ).toEqual([0]);
    expect(
      linkedListToArray(slow(makeLinkedList([0, 0, 0, 0, 0, 0]))),
    ).toEqual([0]);
  });

  test('long array', () => {
    expect(
      linkedListToArray(fast(makeLinkedList([1, 2, 3, 1, 2, 3, 4, 4, 4, 4]))),
    ).toEqual([1, 2, 3, 4]);
    expect(
      linkedListToArray(slow(makeLinkedList([1, 2, 3, 1, 2, 3, 4, 4, 4, 4]))),
    ).toEqual([1, 2, 3, 4]);
  });
});
