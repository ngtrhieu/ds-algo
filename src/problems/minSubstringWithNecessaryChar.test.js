import { minSubstring } from './minSubstringWithNecessaryChar';

describe('minSubstringWithNecessaryChar', () => {
  test('invalid input', () => {
    expect(minSubstring(undefined, [])).toEqual('');
    expect(minSubstring(123, [])).toEqual('');
    expect(minSubstring('123', undefined)).toEqual('');
    expect(minSubstring('123', 123)).toEqual('');
  });

  test('empty string', () => {
    expect(minSubstring('', [])).toEqual('');
    expect(minSubstring('', ['a'])).toEqual('');
    expect(minSubstring('', ['a', 'b'])).toEqual('');
  });

  test('one required character', () => {
    expect(minSubstring('', ['a'])).toEqual('');
    expect(minSubstring('abcabc', ['a'])).toEqual('a');
  });

  test('two required characters', () => {
    expect(minSubstring('abbbbbc', ['a', 'c'])).toEqual('abbbbbc');
    expect(minSubstring('aaaaaac', ['a', 'c'])).toEqual('ac');
    expect(minSubstring('bbb', ['a', 'c'])).toEqual('');
  });

  test('three or more required characters', () => {
    expect(minSubstring('abbbbbc', ['a', 'b', 'c'])).toEqual('abbbbbc');
    expect(minSubstring('aabaaaac', ['a', 'b', 'c'])).toEqual('baaaac');
    expect(minSubstring('cbbb', ['a', 'b', 'c'])).toEqual('');
  });

  test('returns min substring', () => {
    expect(minSubstring('abzbccbbbaabzcczbza', ['a', 'b', 'c'])).toEqual(
      'abzc',
    );
  });
});
