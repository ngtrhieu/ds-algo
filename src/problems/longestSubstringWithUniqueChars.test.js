import { longestString } from './longestSubstringWithUniqueChars';

describe('longestString', () => {
  test('empty', () => {
    expect(longestString()).toBe(0);
    expect(longestString('')).toBe(0);
    expect(longestString(123)).toBe(0);
  });

  test('1 char', () => {
    expect(longestString('a')).toBe(1);
  });

  test('2 chars', () => {
    expect(longestString('aa')).toBe(1);
    expect(longestString('ab')).toBe(2);
  });

  test('3 chars', () => {
    expect(longestString('aaa')).toBe(1);
    expect(longestString('abc')).toBe(3);
    expect(longestString('aba')).toBe(2);
  });

  test('long string', () => {
    expect(longestString('012342617401')).toBe(6);
  });
});
