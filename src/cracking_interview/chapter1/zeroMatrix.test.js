import { zeroMatrix } from './zeroMatrix';

describe('zeroMatrix', () => {
  test('empty', () => {
    expect(zeroMatrix([])).toEqual([]);
  });

  test('size 1', () => {
    expect(zeroMatrix([[1]])).toEqual([[1]]);
    expect(zeroMatrix([[0]])).toEqual([[0]]);
  });

  test('size 2', () => {
    expect(
      zeroMatrix([
        [1, 1],
        [1, 1],
      ]),
    ).toEqual([
      [1, 1],
      [1, 1],
    ]);

    expect(
      zeroMatrix([
        [1, 1],
        [1, 0],
      ]),
    ).toEqual([
      [1, 0],
      [0, 0],
    ]);

    expect(
      zeroMatrix([
        [1, 0],
        [1, 1],
      ]),
    ).toEqual([
      [0, 0],
      [1, 0],
    ]);

    expect(
      zeroMatrix([
        [0, 1],
        [1, 1],
      ]),
    ).toEqual([
      [0, 0],
      [0, 1],
    ]);

    expect(
      zeroMatrix([
        [1, 1],
        [0, 1],
      ]),
    ).toEqual([
      [0, 1],
      [0, 0],
    ]);
  });

  test('big matrix', () => {
    expect(
      zeroMatrix([
        [1, 1, 0, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1],
      ]),
    ).toEqual([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});
