import { palinPermutation } from './palinPermutation';

describe('palinPermutation', () => {
  test('empty', () => {
    expect(palinPermutation('')).toBe(true);
  });

  test('single alphabet', () => {
    expect(palinPermutation('a')).toBe(true);
    expect(palinPermutation(' a ')).toBe(true);
    expect(palinPermutation(' a!')).toBe(true);
  });

  test('two alphabets', () => {
    expect(palinPermutation('aa')).toBe(true);
    expect(palinPermutation('ab')).toBe(false);
    expect(palinPermutation(' a a ')).toBe(true);
    expect(palinPermutation(' b a ')).toBe(false);
    expect(palinPermutation(' a!')).toBe(true);
    expect(palinPermutation(' a!a')).toBe(true);
  });

  test('odd number of alphabets', () => {
    expect(palinPermutation('aaa')).toBe(true);
    expect(palinPermutation('abc')).toBe(false);
    expect(palinPermutation(' a bb ')).toBe(true);
    expect(palinPermutation(' b ac ')).toBe(false);
  });
});
