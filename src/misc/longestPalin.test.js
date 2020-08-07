import { longestPalin, manachers } from './longestPalin';

const testCases = algo => {
  it('empty', () => {
    expect(algo()).toBe(0);
    expect(algo('')).toBe(0);
  });

  it('one character', () => {
    expect(algo('a')).toBe(1);
  });

  it('two characters', () => {
    expect(algo('aa')).toBe(2);
    expect(algo('ab')).toBe(1);
  });

  it('three characters', () => {
    expect(algo('aaa')).toBe(3);
    expect(algo('aba')).toBe(3);
    expect(algo('abb')).toBe(2);
    expect(algo('abc')).toBe(1);
  });

  it('four characters', () => {
    expect(algo('aaaa')).toBe(4);
    expect(algo('abba')).toBe(4);
    expect(algo('abaa')).toBe(3);
    expect(algo('abbc')).toBe(2);
    expect(algo('abcd')).toBe(1);
  });

  it('palin within palin', () => {
    expect(algo('abcdcba')).toBe(7);
    expect(algo('abcddcba')).toBe(8);
    expect(algo('!!abcddcba$$')).toBe(8);
  });

  it('palin next to each other', () => {
    expect(algo('abcba!@abcba')).toBe(5);
  });

  it('subpalin turn out to be of a longer palin', () => {
    expect(algo('cbcdcbcecbcd')).toBe(9);
    expect(algo('cbcdcbceecbcd')).toBe(10);
  });

  it('full palin', () => {
    expect(algo('01234567899876543210')).toBe(20);
  });
};

describe('longestPalin', () => {
  describe('slowMethod', () => testCases(longestPalin));
  describe('manachers', () => testCases(manachers));
});
