/**
 * Given a sorted array arr of distinct integers,
 * write a function that returns the lowest index ifor which arr[i] == i.
 * Return -1 if there is no such index
 */
export const indexEqualsValueSearch = arr => {
  let left = 0;
  let right = arr.length;

  if (left < right) {
    const mid = (left + right) >> 1;

    if (arr[mid] - mid < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr[left] - left === 0 ? left : -1;
};

/**
 * Given a sorted array arr of integers (with duplicates),
 * write a function that returns the lowest index i for which arr[i] == i.
 * Return -1 if there is no such index
 */
export const indexEqualsValueSearchWithDuplicates = arr => {
  const search = (left, right) => {
    const mid = (left + right) >> 1;

    // found the ans
    if (mid === arr[mid]) return mid;

    // search left regardless
    const left = search(left, Math.min(arr[mid] + 1, mid));
    if (left >= 0) return left;

    // if left not found, search right
    return search(Math.min(arr[mid], mid + 1), right);
  };

  return search(0, arr.length);

  // Time O(N) - so might as well iterative scanning
};
