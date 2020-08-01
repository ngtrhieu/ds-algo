import maxProfit from './maxProfit';

describe('maxProfit', () => {
  test('sample test', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('empty', () => {
    expect(maxProfit([])).toBe(0);
  });

  test('one element', () => {
    expect(maxProfit([0])).toBe(0);
    expect(maxProfit([1])).toBe(0);
  });

  test('two elements', () => {
    expect(maxProfit([0, 0])).toBe(0);
    expect(maxProfit([1, 0])).toBe(0);
    expect(maxProfit([0, 1])).toBe(1);
  });
});
