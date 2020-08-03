import { intersection } from './intersection';
import { makeLinkedList } from '../../data_structures/linkedList';

describe('linkedList intersection', () => {
  test('empty', () => {
    const list1 = makeLinkedList([]);
    const list2 = makeLinkedList([]);
    expect(intersection(list1, list2)).toBe(false);
  });

  test('either one empty', () => {
    let list1 = makeLinkedList([1]);
    let list2 = makeLinkedList([]);
    expect(intersection(list1, list2)).toBe(false);

    list1 = makeLinkedList([]);
    list2 = makeLinkedList([2]);
    expect(intersection(list1, list2)).toBe(false);
  });

  test('same list', () => {
    let list1 = makeLinkedList([1, 2, 3, 4]);
    expect(intersection(list1, list1)).toBe(list1);
  });

  test('intersect', () => {
    let list1 = makeLinkedList([1, 2, 3]);
    let list2 = makeLinkedList([1, 2]);
    let shared = makeLinkedList([1, 2, 3, 4]);
    list1.next.next.next = shared;
    list2.next.next = shared;
    expect(intersection(list1, list2)).toBe(shared);
    expect(intersection(list2, list1)).toBe(shared);
  });

  test('no intersect', () => {
    let list1 = makeLinkedList([1, 2, 3]);
    let list2 = makeLinkedList([1, 2]);
    expect(intersection(list1, list2)).toBe(false);
  });
});
