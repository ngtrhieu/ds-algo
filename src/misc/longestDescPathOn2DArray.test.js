import { longestPath } from './longestDescPathOn2DArray';

describe('longestPath', () => {
  test('empty', () => {
    expect(longestPath(undefined, 0, 0)).toBe(0);
    expect(longestPath([], 0, 0)).toBe(0);
  });

  test('invalid input', () => {
    expect(longestPath([[9]], -1, 0)).toBe(0);
    expect(longestPath([[9]], 0, -1)).toBe(0);
    expect(longestPath([[9]], 2, 0)).toBe(0);
    expect(longestPath([[9]], 0, 2)).toBe(0);
  });

  test('1x1 matrix', () => {
    expect(longestPath([[9]], 0, 0)).toBe(1);
  });

  test('3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [6, 5, 4],
      [7, 8, 9],
    ];

    expect(longestPath(matrix, 2, 2)).toBe(9);
    expect(longestPath(matrix, 1, 1)).toBe(5);
  });

  test('4x4 matrix', () => {
    const matrix = [
      [1, 9, 7, 6],
      [2, 1, 2, 5],
      [9, 1, 3, 4],
      [0, 3, 2, 3],
    ];

    expect(longestPath(matrix, 0, 1)).toBe(8);
    expect(longestPath(matrix, 3, 3)).toBe(2);
    expect(longestPath(matrix, 2, 0)).toBe(3);
  });
});
