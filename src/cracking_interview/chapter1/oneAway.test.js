import { oneAway } from './oneAway';

describe('oneAway', () => {
  test('empty', () => {
    expect(oneAway('', '')).toBe(true);
  });

  test('oneAway from empty', () => {
    expect(oneAway('', 'a')).toBe(true);
    expect(oneAway('', 'ab')).toBe(false);
  });

  test('oneAway via edit', () => {
    expect(oneAway('abc', 'abb')).toBe(true);
    expect(oneAway('abc', 'acc')).toBe(true);
    expect(oneAway('abc', 'bbc')).toBe(true);

    expect(oneAway('abc', 'aaa')).toBe(false);
    expect(oneAway('abc', 'abcde')).toBe(false);
    expect(oneAway('abc', 'abbd')).toBe(false);
  });

  test('oneAway via removal', () => {
    expect(oneAway('abc', 'abbc')).toBe(true);
    expect(oneAway('abbc', 'abc')).toBe(true);

    expect(oneAway('abc', 'abbcd')).toBe(false);
  });
});
