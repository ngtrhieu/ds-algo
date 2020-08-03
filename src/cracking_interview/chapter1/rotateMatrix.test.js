import { rotate } from './rotateMatrix';

describe('rotateMatrix', () => {
  test('empty', () => {
    expect(rotate([])).toEqual([]);
  });

  test('size 1', () => {
    expect(rotate([[1]])).toEqual([[1]]);
  });

  test('size 2', () => {
    expect(
      rotate([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test('size 3', () => {
    expect(
      rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test('size 4', () => {
    expect(
      rotate([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 1, 2],
        [3, 4, 5, 6],
      ]),
    ).toEqual([
      [3, 9, 5, 1],
      [4, 0, 6, 2],
      [5, 1, 7, 3],
      [6, 2, 8, 4],
    ]);
  });

  test('size 5', () => {
    expect(
      rotate([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
      ]),
    ).toEqual([
      [1, 6, 1, 6, 1],
      [2, 7, 2, 7, 2],
      [3, 8, 3, 8, 3],
      [4, 9, 4, 9, 4],
      [5, 0, 5, 0, 5],
    ]);
  });
});
