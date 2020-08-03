import { isUnique } from './isUnique';

describe('isUnique', () => {
  test('empty', () => {
    expect(isUnique('')).toBe(true);
  });

  test('single character', () => {
    expect(isUnique('a')).toBe(true);
    expect(isUnique('b')).toBe(true);
  });

  test('two characters', () => {
    expect(isUnique('ab')).toBe(true);
    expect(isUnique('bb')).toBe(false);
  });

  test('long string', () => {
    expect(isUnique('abcdef')).toBe(true);
    expect(isUnique('abecced')).toBe(false);
    expect(isUnique('abceda')).toBe(false);
    expect(isUnique('123456')).toBe(true);
  });
});
