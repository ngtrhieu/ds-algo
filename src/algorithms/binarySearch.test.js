import binarySearch, {
  bisectLeft,
  bisectRight,
  findPivot,
} from './binarySearch';

describe('binarySearch', () => {
  test('empty', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test('one or two elements', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
    expect(binarySearch([1, 4], 1)).toBe(0);
    expect(binarySearch([1, 4], 4)).toBe(1);
    expect(binarySearch([1, 4], 5)).toBe(-1);
  });

  test('more than two elements', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 10)).toBe(3);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 9)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 4)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 0)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 21)).toBe(-1);
  });
});

describe('bisectLeft', () => {
  test('missing element', () => {
    expect(bisectLeft([1, 2, 4], 3)).toBe(2);
  });

  test('duplicates', () => {
    expect(bisectLeft([1, 2, 2, 2, 2, 2, 3], 2)).toBe(1);
  });

  test('leftmost', () => {
    expect(bisectLeft([1, 2, 2, 2, 2, 2, 3], -1)).toBe(0);
  });

  test('rightmost', () => {
    expect(bisectLeft([1, 2, 2, 2, 2, 2, 3], 10)).toBe(7);
  });

  test('empty', () => {
    expect(bisectLeft([], 1)).toBe(0);
  });
});

describe('bisectRight', () => {
  test('missing element', () => {
    expect(bisectRight([1, 2, 4], 3)).toBe(2);
  });

  test('duplicates', () => {
    expect(bisectRight([1, 2, 2, 2, 2, 2, 3], 2)).toBe(6);
  });

  test('leftmost', () => {
    expect(bisectRight([1, 2, 2, 2, 2, 2, 3], -1)).toBe(0);
  });

  test('rightmost', () => {
    expect(bisectRight([1, 2, 2, 2, 2, 2, 3], 10)).toBe(7);
  });

  test('empty', () => {
    expect(bisectRight([], 1)).toBe(0);
  });
});

describe('findPivot', () => {
  test('empty', () => {
    expect(findPivot([])).toBe(0);
  });

  test('one elem', () => {
    expect(findPivot([0])).toBe(0);
  });

  test('unrorated array', () => {
    expect(findPivot([0, 1])).toBe(0);
    expect(findPivot([0, 1, 2])).toBe(0);
    expect(findPivot([0, 1, 2, 3])).toBe(0);
  });

  test('rotated by 1', () => {
    expect(findPivot([1, 0])).toBe(1);
    expect(findPivot([2, 0, 1])).toBe(1);
    expect(findPivot([3, 0, 1, 2])).toBe(1);
  });

  test('rotated by n-1', () => {
    expect(findPivot([1, 0])).toBe(1);
    expect(findPivot([1, 2, 0])).toBe(2);
    expect(findPivot([1, 2, 3, 0])).toBe(3);
  });

  test('rotated by other amount', () => {
    expect(findPivot([4, 5, 6, 7, 0, 1, 2])).toBe(4);
    expect(findPivot([3, 4, 0, 1, 2, 3, 3])).toBe(2);
  });

  test('duplicate elements', () => {
    expect(findPivot([1, 2, 2, 0])).toBe(3);
    expect(findPivot([1, 1, 2, 2, 0])).toBe(4);
    expect(findPivot([1, 1, 1, 1, 1, 1, 1, 1])).toBe(7); // any pivot is correct
  });

  test('descreasing array', () => {
    expect(() => findPivot([3, 2, 1, 0])).toThrow(Error);
  });
});
