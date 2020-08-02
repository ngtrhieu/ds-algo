/**
 * Returns the leftmost position that `target` should go to such that `arr` remains sorted.
 * Assume that the array `arr` is already sorted.
 *
 * @param {Array} arr - the **sorted** array of elements
 * @param {*} target - the target element
 * @param {Func} comparer - the comparer used to **sort** the arr
 *
 * @returns {number}
 */
export const bisectLeft = (arr, target, comparer = (a, b) => a - b) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >>> 1;
    const compare = comparer(arr[mid], target);

    if (compare < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

/**
 * Returns the rightmost position that `target` should go to such that `arr` remains sorted.
 * Assume that the array `arr` is already sorted.
 *
 * @param {Array} arr - the **sorted** array of elements
 * @param {*} target - the target element
 * @param {Func} comparer - the comparer used to **sort** the arr
 *
 * @returns {number}
 */
export const bisectRight = (arr, target, comparer = (a, b) => a - b) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >>> 1;
    const compare = comparer(arr[mid], target);

    if (compare <= 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

/**
 * Given a `array` that are sorted by `comparer` and rorated by an unknown `pivot`, returns `pivot`
 * @param {Array} arr
 * @param {Func} comparer
 *
 * @returns {number} - the rotated `pivot`
 */
export const findPivot = (arr, comparer = (a, b) => a - b) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (comparer(arr[left], arr[right]) < 0) break;

    const mid = (left + right) >>> 1;

    if (comparer(arr[left], arr[mid]) <= 0) {
      left = mid + 1;
    } else if (comparer(arr[mid], arr[right]) <= 0) {
      right = mid;
    } else {
      throw new Error('invalid input');
    }
  }

  return left;
};

/**
 * Binary search the `target` inside the `arr` using `comparer`
 * Assume that the array `arr` is already sorted.
 *
 * @param {Array} arr - the **sorted** array of elements
 * @param {*} target - the target element
 * @param {Func} comparer - the comparer used to **sort** the arr
 *
 * @returns {number} - index of the target element
 */
export default (arr, target, comparer = (a, b) => a - b) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >>> 1;
    const compare = comparer(arr[mid], target);

    if (compare === 0) {
      return mid;
    } else if (compare < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return -1;
};
