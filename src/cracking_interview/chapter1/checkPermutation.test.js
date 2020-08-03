import {
  checkPermutationTrivial as trivial,
  checkPermutation as proper,
} from './checkPermutation';

describe('checkPermutation', () => {
  test('empty', () => {
    expect(trivial('')).toBe(true);
    expect(proper('')).toBe(true);
  });

  test('empty', () => {
    expect(trivial('')).toBe(true);
    expect(proper('')).toBe(true);
  });

  test('single character', () => {
    expect(trivial('a')).toBe(true);
    expect(proper('a')).toBe(true);
  });

  test('two characters', () => {
    expect(trivial('aa')).toBe(true);
    expect(proper('aa')).toBe(true);

    expect(trivial('ab')).toBe(false);
    expect(proper('ab')).toBe(false);
  });

  test('odd length strings', () => {
    expect(trivial('aba')).toBe(true);
    expect(proper('aba')).toBe(true);

    expect(trivial('abb')).toBe(false);
    expect(proper('abb')).toBe(false);

    expect(trivial('abeba')).toBe(true);
    expect(proper('abeba')).toBe(true);

    expect(trivial('abeea')).toBe(false);
    expect(proper('abeea')).toBe(false);
  });

  test('even length strings', () => {
    expect(trivial('abba')).toBe(true);
    expect(proper('abba')).toBe(true);

    expect(trivial('abbb')).toBe(false);
    expect(proper('abbb')).toBe(false);

    expect(trivial('abca')).toBe(false);
    expect(proper('abca')).toBe(false);
  });
});
