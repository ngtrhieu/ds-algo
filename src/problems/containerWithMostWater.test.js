import maxArea from './containerWithMostWater';

describe('containerWithMostWater', () => {
  it('sample test', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('empty', () => {
    expect(maxArea()).toBe(0);
    expect(maxArea([])).toBe(0);
  });

  it('one elem', () => {
    expect(maxArea([1])).toBe(0);
  });

  it('two elements', () => {
    expect(maxArea([1, 2])).toBe(1);
    expect(maxArea([3, 2])).toBe(2);
  });

  it('sorted', () => {
    expect(maxArea([1, 2, 6, 7])).toBe(6);
    expect(maxArea([6, 5, 4])).toBe(8);
    expect(maxArea([6, 5, 1])).toBe(5);
    expect(maxArea([1, 1, 1, 1, 1, 1, 7])).toBe(6);
  });

  it('mountain shape', () => {
    expect(maxArea([3, 2, 1, 2, 3])).toBe(12);
  });

  it('valley shape', () => {
    expect(maxArea([1, 4, 5, 4, 1])).toBe(8);
    expect(maxArea([3, 4, 5, 4, 3])).toBe(12);
  });
});
