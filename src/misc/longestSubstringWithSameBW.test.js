import { longestBW } from './longestSubstringWithSameBW';

describe('longestBW', () => {
  test('empty', () => {
    expect(longestBW()).toBe(0);
    expect(longestBW('')).toBe(0);
    expect(longestBW('abc')).toBe(0);
    expect(longestBW(123)).toBe(0);
  });

  test('1 char', () => {
    expect(longestBW('1')).toBe(0);
    expect(longestBW('0')).toBe(0);
  });

  test('2 chars', () => {
    expect(longestBW('00')).toBe(0);
    expect(longestBW('01')).toBe(2);
  });

  test('3 chars', () => {
    expect(longestBW('000')).toBe(0);
    expect(longestBW('010')).toBe(2);
    expect(longestBW('011')).toBe(2);
  });

  test('long string', () => {
    expect(longestBW('00011001111001')).toBe(14);
    expect(longestBW('0001100111100')).toBe(12);

    expect(longestBW('00000010000011')).toBe(4);
    expect(longestBW('00000011000001')).toBe(4);
  });
});
