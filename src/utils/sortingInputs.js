import _ from 'lodash';

export default ({ algorithm, it, expect }) => {
  it('empty input', () => {
    expect(algorithm([])).toEqual([]);
  });

  it('one element', () => {
    expect(algorithm([0])).toEqual([0]);
  });

  it('two elements', () => {
    expect(algorithm([1, 2])).toEqual([1, 2]);
    expect(algorithm([2, 1])).toEqual([1, 2]);
  });

  it('three or more elements', () => {
    expect(algorithm([10, 2, 4])).toEqual([2, 4, 10]);
    expect(algorithm([4, 5, 6, 1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(algorithm([1, 2, 3, 4, 5, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    expect(algorithm([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
    expect(algorithm([5, 4, 3, 2, 1, 10, 9, 8, 7, 6])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
    expect(algorithm([98322, 3242, 876, -234, 34, 12331])).toEqual([
      -234,
      34,
      876,
      3242,
      12331,
      98322,
    ]);
  });

  test('duplicate elements', () => {
    expect(algorithm([1, 1])).toEqual([1, 1]);
    expect(algorithm([1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
    expect(algorithm([7, 2, 4, 3, 1, 2])).toEqual([1, 2, 2, 3, 4, 7]);
  });

  it('random generated test', () => {
    _.times(1000, () => {
      const arr = [];
      _.times(1000, () => arr.push(Math.ceil(Math.random() * 100) - 50));

      const sorted = algorithm(arr);
      expect(
        _.every(sorted, (_, i) => !i || sorted[i] >= sorted[i - 1]),
      ).toBeTruthy();
    });
  });

  it('stress test', () => {
    const arr = [];
    _.times(1000000, () => arr.push(Math.ceil(Math.random() * 100) - 50));

    const sorted = algorithm(arr);
    expect(
      _.every(sorted, (_, i) => !i || sorted[i] >= sorted[i - 1]),
    ).toBeTruthy();
  });
};
