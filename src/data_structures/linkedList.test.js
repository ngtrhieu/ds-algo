import _ from 'lodash';
import { makeLinkedList, linkedListToArray } from './linkedList';

describe('makeLinkedList', () => {
  it('undefined', () => {
    expect(makeLinkedList()).toBe(undefined);
  });

  it('empty array', () => {
    expect(makeLinkedList([])).toBe(null);
  });

  it('one element', () => {
    expect(makeLinkedList([1])).toEqual({ val: 1, next: null });
  });

  it('two elements', () => {
    expect(makeLinkedList([1, 2])).toEqual({
      val: 1,
      next: { val: 2, next: null },
    });
  });

  it('three elements', () => {
    expect(makeLinkedList([1, 2, 3])).toEqual({
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: null },
      },
    });
  });
});

describe('linkedListToArray', () => {
  it('undefined', () => {
    expect(linkedListToArray()).toBe(undefined);
  });

  it('empty array', () => {
    expect(linkedListToArray(null)).toEqual([]);
  });

  it('one element', () => {
    expect(
      linkedListToArray({
        val: 1,
        next: null,
      }),
    ).toEqual([1]);
  });

  it('two elements', () => {
    expect(
      linkedListToArray({
        val: 1,
        next: { val: 2, next: null },
      }),
    ).toEqual([1, 2]);
  });

  it('three elements', () => {
    expect(
      linkedListToArray({
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: null },
        },
      }),
    ).toEqual([1, 2, 3]);
  });

  it('random test', () => {
    const arr = [];
    _.times(100, () => arr.push(Math.ceil(Math.random * 100)));
    expect(linkedListToArray(makeLinkedList(arr))).toEqual(arr);
  });
});
