import { partition } from './partition';
import {
  makeLinkedList,
  linkedListToArray,
} from '../../data_structures/linkedList';

describe('linkedList partition', () => {
  test('empty', () => {
    let list = makeLinkedList([]);
    let pivot = undefined;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([]);
  });

  test('one elem', () => {
    let list = makeLinkedList([1]);
    let pivot = list;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([1]);
  });

  test('two elems', () => {
    let list = makeLinkedList([1, 2]);
    let pivot = list;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([1, 2]);

    list = makeLinkedList([2, 1]);
    pivot = list;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([1, 2]);
  });

  test('three elems', () => {
    let list = makeLinkedList([1, 2, 3]);
    let pivot = list.next;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([1, 2, 3]);

    list = makeLinkedList([2, 1, 3]);
    pivot = list.next;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([1, 3, 2]);
  });

  test('long list', () => {
    let list = makeLinkedList([9, 9, 5, 2, 2, 2, 2]);
    let pivot = list.next.next;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([2, 2, 2, 2, 5, 9, 9]);

    list = makeLinkedList([5, 9, 9, 2, 2, 2, 2]);
    pivot = list;
    partition(list, pivot);
    expect(linkedListToArray(list)).toEqual([2, 2, 2, 2, 5, 9, 9]);
  });
});
