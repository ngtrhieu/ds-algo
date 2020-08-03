import { deleteMiddleMode as deleteNode } from './deleteMiddleNode';
import {
  makeLinkedList,
  linkedListToArray,
} from '../../data_structures/linkedList';

describe('deleteMiddleMode', () => {
  test('one element', () => {
    let list = makeLinkedList([0]);
    let node = list;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([null]);
  });

  test('two elements', () => {
    let list = makeLinkedList([0, 1]);
    let node = list;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([1]);

    list = makeLinkedList([0, 1]);
    node = list.next;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([0, null]);
  });

  test('three elements', () => {
    let list = makeLinkedList([0, 1, 2]);
    let node = list;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([1, 2]);

    list = makeLinkedList([0, 1, 2]);
    node = list.next;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([0, 2]);

    list = makeLinkedList([0, 1, 2]);
    node = list.next.next;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([0, 1, null]);

    list = makeLinkedList([0, 1, 2]);
    node = list.next.next.next;
    deleteNode(node);
    expect(linkedListToArray(list)).toEqual([0, 1, 2]);
  });
});
