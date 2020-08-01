import isAnagram from './isAnagram';

describe('isAnagram', () => {
  test('sample test', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  test('empty', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  test('exact match', () => {
    expect(isAnagram('abc', 'abc')).toBe(true);
    expect(isAnagram('hieu', 'hieu')).toBe(true);
  });

  test('diff length', () => {
    expect(isAnagram('abc', 'abcdef')).toBe(false);
    expect(isAnagram('ngtrhieu', 'hieu')).toBe(false);
  });

  test('partial match', () => {
    expect(isAnagram('abcdef', 'abcdfe')).toBe(true);
    expect(isAnagram('abcdff', 'abcdfe')).toBe(false);
    expect(isAnagram('abcdfe', 'abcdff')).toBe(false);
  });
});
