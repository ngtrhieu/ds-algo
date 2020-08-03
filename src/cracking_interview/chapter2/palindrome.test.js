import { isPalindrome as palin } from './palindrome';
import { makeLinkedList } from '../../data_structures/linkedList';

describe('linkedList isPalindrome', () => {
  test('empty', () => {
    expect(palin(makeLinkedList([]))).toBe(true);
  });

  test('one element', () => {
    expect(palin(makeLinkedList([0]))).toBe(true);
  });

  test('two elements', () => {
    expect(palin(makeLinkedList([0, 0]))).toBe(true);
    expect(palin(makeLinkedList([0, 1]))).toBe(false);
  });

  test('three elements', () => {
    expect(palin(makeLinkedList([0, 0, 0]))).toBe(true);
    expect(palin(makeLinkedList([0, 1, 0]))).toBe(true);
    expect(palin(makeLinkedList([0, 1, 1]))).toBe(false);
  });

  test('four elements', () => {
    expect(palin(makeLinkedList([0, 0, 0, 0]))).toBe(true);
    expect(palin(makeLinkedList([0, 1, 1, 0]))).toBe(true);
    expect(palin(makeLinkedList([0, 1, 0, 0]))).toBe(false);
    expect(palin(makeLinkedList([0, 1, 1, 1]))).toBe(false);
  });

  test('long array', () => {
    expect(palin(makeLinkedList([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]))).toBe(true);
    expect(palin(makeLinkedList([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]))).toBe(true);

    expect(palin(makeLinkedList([1, 2, 3, 4, 5, 6, 4, 3, 2, 1]))).toBe(false);
    expect(palin(makeLinkedList([1, 2, 3, 4, 5, 5, 4, 4, 2, 1]))).toBe(false);
    expect(palin(makeLinkedList([1, 3, 3, 4, 5, 5, 4, 3, 2, 1]))).toBe(false);

    expect(palin(makeLinkedList([1, 2, 3, 0, 5, 6, 5, 4, 3, 2, 1]))).toBe(
      false,
    );
    expect(palin(makeLinkedList([1, 2, 3, 4, 5, 6, 0, 4, 3, 2, 1]))).toBe(
      false,
    );
  });
});
