import maxSubArray from './maxSubArray';

describe('maxSubArray', () => {
  test('sample test', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  test('empty', () => {
    expect(maxSubArray([])).toBeUndefined();
  });

  test('one element', () => {
    expect(maxSubArray([0])).toEqual(0);
    expect(maxSubArray([-1])).toEqual(-1);
    expect(maxSubArray([5])).toEqual(5);
  });

  test('two elements', () => {
    expect(maxSubArray([0, 1])).toEqual(1);
    expect(maxSubArray([-1, 1])).toEqual(1);
    expect(maxSubArray([1, -1])).toEqual(1);
    expect(maxSubArray([-1, -1])).toEqual(-1);
    expect(maxSubArray([-1, 0])).toEqual(0);
  });
});
