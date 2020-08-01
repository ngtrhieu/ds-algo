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
    const mid = Math.floor((left + right) / 2);
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
    const mid = Math.floor((left + right) / 2);
    const compare = comparer(arr[mid], target);

    if (compare <= 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;s
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
    const mid = Math.floor((left + right) / 2);
    const compare = comparer(arr[mid], target);

    if (compare === 0) return mid;

    if (compare < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return -1;
};
