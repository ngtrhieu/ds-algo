import product from './productExceptSelf';

describe('productExceptSelf', () => {
  test('sample test', () => {
    expect(product([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test('empty', () => {
    expect(product([])).toEqual([]);
  });

  test('one element', () => {
    expect(product([-1])).toEqual([1]);
    expect(product([0])).toEqual([1]);
    expect(product([1])).toEqual([1]);
  });

  test('includes zero', () => {
    expect(product([1, 2, 3, 0, 1, 2, 3])).toEqual([0, 0, 0, 36, 0, 0, 0]);
    expect(product([1, 2, 3, 1, 2, 3, 0])).toEqual([0, 0, 0, 0, 0, 0, 36]);
    expect(product([0, 1, 2, 3, 1, 2, 3])).toEqual([36, 0, 0, 0, 0, 0, 0]);
  });
});
