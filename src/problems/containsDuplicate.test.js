import containsDuplicate from './containsDuplicate';

describe('containDuplicate', () => {
  test('sample test', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });

  test('empty', () => {
    expect(containsDuplicate([])).toBeFalsy();
  });

  test('one element', () => {
    expect(containsDuplicate([0])).toBeFalsy();
    expect(containsDuplicate([1])).toBeFalsy();
  });

  test('two elements', () => {
    expect(containsDuplicate([0, 0])).toBeTruthy();
    expect(containsDuplicate([1, 0])).toBeFalsy();
  });
});
