/**
 * Given a sorted, rotated array, find its pivot
 */

export const findPivot = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (arr[left] <= arr[right]) {
      break;
    }

    if (arr[mid - 1] > arr[mid]) {
      return mid;
    }
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    if (arr[start] < arr[mid]) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }

  return left;
};
