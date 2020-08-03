import { deleteMiddleMode as deleteNode } from './deleteMiddleNode';
import {
  makeLinkedList,
  linkedListToArray,
} from '../../data_structures/linkedList';

describe('deleteMiddleMode', () => {
  test('empty', () => {
    const list = makeLinkedList([]);
    const node = { val: 0 };
    expect(linkedListToArray(deleteNode(list, node))).toEqual([]);
  });

  test('one element', () => {
    let list = makeLinkedList([0]);
    let node = list;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([]);

    list = makeLinkedList([0]);
    node = { val: 0 };
    expect(linkedListToArray(deleteNode(list, node))).toEqual([0]); // node is not from list
  });

  test('two elements', () => {
    let list = makeLinkedList([0, 1]);
    let node = list;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([1]);

    list = makeLinkedList([0, 1]);
    node = list.next;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([0]);
  });

  test('three elements', () => {
    let list = makeLinkedList([0, 1, 2]);
    let node = list;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([1, 2]);

    list = makeLinkedList([0, 1, 2]);
    node = list.next;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([0, 2]);

    list = makeLinkedList([0, 1, 2]);
    node = list.next.next;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([0, 1]);

    list = makeLinkedList([0, 1, 2]);
    node = list.next.next.next;
    expect(linkedListToArray(deleteNode(list, node))).toEqual([0, 1, 2]);
  });
});
