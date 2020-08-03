import { sumReversed } from './sumList';
import {
  makeLinkedList,
  linkedListToArray,
} from '../../data_structures/linkedList';

describe('linkedList sum', () => {
  it('empty', () => {
    const list1 = makeLinkedList([]);
    const list2 = makeLinkedList([]);

    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([]);
  });

  it('one digit', () => {
    let list1 = makeLinkedList([1]);
    let list2 = makeLinkedList([]);
    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([1]);

    list1 = makeLinkedList([1]);
    list2 = makeLinkedList([2]);
    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([3]);

    list1 = makeLinkedList([5]);
    list2 = makeLinkedList([7]);
    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([2, 1]);
  });

  it('two digits', () => {
    let list1 = makeLinkedList([5, 1]);
    let list2 = makeLinkedList([5, 5]);
    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([0, 7]);

    list1 = makeLinkedList([1]);
    list2 = makeLinkedList([9, 9]);
    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([0, 0, 1]);
  });

  it('long digits', () => {
    let list1 = makeLinkedList([9, 9, 9, 9]);
    let list2 = makeLinkedList([9, 9, 9, 9]);
    expect(linkedListToArray(sumReversed(list1, list2))).toEqual([
      8,
      9,
      9,
      9,
      1,
    ]);
  });
});
