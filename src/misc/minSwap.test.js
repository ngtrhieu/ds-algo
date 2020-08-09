import { minSwap } from './minSwap';

describe('minSwap', () => {
  test('empty', () => {
    expect(minSwap()).toBe(0);
    expect(minSwap([])).toBe(0);
  });

  test('3 2 0 1', () => {
    expect(minSwap([3, 2, 0, 1])).toBe(3);
  });

  test('1 2 3 0 4', () => {
    expect(minSwap([1, 2, 3, 0, 4])).toBe(3);
  });

  test('0 2 4 1 3 5 6', () => {
    expect(minSwap([0, 2, 4, 1, 3, 5, 6])).toBe(3);
  });
});
