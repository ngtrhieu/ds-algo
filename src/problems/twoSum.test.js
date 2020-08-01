import twoSum from './twoSum';

describe('twoSum', () => {
  test('sample test', () => {
    expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
  });

  test('empty', () => {
    expect(twoSum([], 0)).toBeUndefined();
  });

  test('no solution', () => {
    expect(twoSum([2, 7, 11, 15], 8)).toBeUndefined();
  });

  test('duplicate number', () => {
    expect(twoSum([2, 7, 2, 15], 4).sort()).toEqual([0, 2]);
    expect(twoSum([2, 7, 15], 4)).toBeUndefined();
  });
});
